import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task, User } from "../entities";
import taskRepositorie from "../repositories/task.repositorie";
import {
  serializedAllTasksSchema,
  serializedCreateTaskSchema,
} from "../schemas/task.schema";
import userRepositorie from "../repositories/user.repositorie";
import { decode } from "punycode";
// import { serializedTaskData } from "../utils/serializedAllTask.util"

class TaskService {
  create = async ({ validated, decoded }: Request) => {
    const user: User = await userRepositorie.findById(decoded.id);
    const task = await taskRepositorie.save({ ...(validated as Task), user });
    console.log(task, "taaaask");
    return await serializedCreateTaskSchema.validate(task, {
      stripUnknown: true,
    });
  };

  getAll = async ({ decoded }: Request) => {
    const tasks: Task[] = await AppDataSource.getRepository(Task).find({
      where: { user: { id: decoded.id } },
    });
    return tasks;
  };

  update = async ({ params, body }: Request) => {
    const allowedProperties = ["title", "description", "status"];
    const allowedValuesToStatus = ["TO-DO", "IN-PROGRESS", "COMPLETED"];

    const invalidProperties = Object.keys(body).filter(
      (property) => !allowedProperties.includes(property)
    );

    const invalidStatusValues = Object.values(body).filter((value) => {
      if (typeof value === "string") {
        return (
          !allowedProperties.includes("status") ||
          !allowedValuesToStatus.includes(value)
        );
      }
      return false;
    });

    if (invalidStatusValues.length > 0) {
      throw new Error(
        `O valor ${invalidStatusValues.join(
          ", "
        )} não é permitido para atualização.`
      );
    }

    if (invalidProperties.length > 0) {
      throw new Error(
        `As propriedades ${invalidProperties.join(
          ", "
        )} não são permitidas para atualização.`
      );
    }

    const updated = await AppDataSource.getRepository(Task).update(params.id, {
      ...body,
    });

    return updated;
  };

  delete = async ({ params }: Request, res: Response) => {
    const deleteResult = await taskRepositorie.deleteById(params.id);

    if (deleteResult.affected === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted" });
  };
}

export default new TaskService();
