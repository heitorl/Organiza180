import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task, User } from "../entities";
import taskRepositorie from "../repositories/task.repositorie";
import { serializedCreateTaskSchema } from "../schemas/task.schema";
import { serializedTaskData } from "../utils/serializedAllTask.util"


class TaskService {

  
  create = async ({ validated, decoded }: Request) => {
  
    const user = await AppDataSource.getRepository(User).findOneBy({
      id: decoded.id,
    });

    const task = await taskRepositorie.save({...(validated as Task), user})

    return await serializedCreateTaskSchema.validate(task, {
      stripUnknown: true,
    })
  }

  getAll = async ({params}: Request) => {
    
    const user = await AppDataSource.getRepository(User).findOne({
      where: { id: params.id },
    });
    const task = serializedTaskData(user)
    
    return task
  
  };

  update = async ({
    params,
    body,
  }: Request) => {
    const allowedProperties = ['description', 'status'];
    const invalidProperties = Object.keys(body).filter((prop) => !allowedProperties.includes(prop));
    if (invalidProperties.length > 0) {
      throw new Error(`As propriedades ${invalidProperties.join(', ')} não são permitidas para atualização.`);
    }
    
 
    const updated = await AppDataSource.getRepository(Task).update(params.id, {
      ...body,
    });
  
    return updated
  };
    
  
  delete = async ({ params }: Request, res: Response) => {
    const deleteResult = await taskRepositorie.deleteById(params.id);
  
    if (deleteResult.affected === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
  
    return res.status(200).json({ message: 'Task deleted' });
  };



}

export default new TaskService()