import { Request, Response } from "express";
import { userService } from "../services";
import { DatabaseError } from "pg";

class userController {
  create = async (req: Request, res: Response) => {
    try {
      const user = await userService.register(req);

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof DatabaseError) {
        return res.status(409).send({ error: err.detail });
      }
      console.log(err);
      res.status(err.statusCode).send({ error: (err as Error).message });
    }
  };

  login = async (req: Request, res: Response) => {
    const user = await userService.login(req);

    return res.status(201).json(user);
  };

  // userNotifications = async (req: Request, res: Response) => {
  //   try{
  //     const notificationsUser = await notificationService.retrieveNotifications(req)

  //     return res.status(200).json(notificationsUser)
  //   }catch (err) {
  //       if (err instanceof DatabaseError) {
  //       return res.status(409).send({ error: err.detail });
  //     }
  //     res.status(err.statusCode).send({ error: (err as Error).message });
  //   }

  // }
}

export default new userController();
