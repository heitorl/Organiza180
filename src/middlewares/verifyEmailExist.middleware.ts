import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { ErrorHandler } from "../errors"

const verifyEmailExist = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const user: User = await AppDataSource.getRepository(User).findOneBy({ email: req.body.email })
  
    if(user){
      throw new ErrorHandler(409, "Email already exists.");
    }
  
    return next()

  }catch (error) {  
    return res.status(error.statusCode).send({ error: error.error });
  }

}


export default verifyEmailExist