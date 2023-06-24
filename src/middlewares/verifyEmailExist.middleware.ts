import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities"

const verifyEmailExist = async (req: Request, res: Response, next: NextFunction) => {

  const user: User = await AppDataSource.getRepository(User).findOneBy({ email: req.body.email })


  if(user){
    return res.status(409).json({message: "Email already exists."})
  }

  return next()

}


export default verifyEmailExist