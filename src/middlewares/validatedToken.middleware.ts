import { NextFunction, Request, Response } from "express";
import {JwtPayload, verify, VerifyErrors}  from "jsonwebtoken";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
  ) => {

    const token: string = req.headers.authorization?.split(" ")[1]

    if(!token)
      return res.status(400).json({"message": "Missing authorization token."})

    return verify(
      token,
      "tiveproblemaemproducao",
      (err: VerifyErrors, decoded: string | JwtPayload) => {
        if (err) {
          return res.status(401).json({
            error: { name: "JsonWebTokenError", message: "jwt malformed" },
          });
        }
        const user = AppDataSource.getRepository(User).findOneBy(
          {email: (decoded as User).email}
        )

        
        if(user){
          req.decoded = decoded as User         
         
          return next()          
        }        

      }
    )
}

export default validateToken