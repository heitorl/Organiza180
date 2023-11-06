import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task, User } from "../entities";
import { ErrorHandler } from "../errors";

const verifyEmailExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.params.id;
    const tasks = await AppDataSource.getRepository(Task)
      .createQueryBuilder("task")
      .innerJoin("task.task_assigned_users_user", "taskUser")
      .where("taskUser.user = :userId", { user })
      .getMany();

    if (!tasks) {
      throw new ErrorHandler(404, "Não existe nenhuma task.");
    }

    return next();
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.error });
  }
};

export default verifyEmailExist;
