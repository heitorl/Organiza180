import { Request, Response } from "express"
import { userService } from "../services"


class userController {

  create = async (req: Request, res: Response) => {
    const user = await userService.register(req)
    
    return res.status(201).json(user)
  }

  login = async (req: Request, res: Response) => {
    const user = await userService.login(req)
    
    return res.status(201).json(user)
  }


}

export default new userController()