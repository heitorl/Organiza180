import { Request, Response } from "express"
import { taskService } from "../services"

class TaskController {


  createTask = async (req: Request, res: Response) => {
    const task = await taskService.create(req)
    
    return res.status(201).json(task)
  }

  getallTasks = async (req: Request, res: Response) => {
    const task = await taskService.getAll(req)
    
    return res.status(200).json(task)
  }

  updateTask = async (req: Request, res: Response) => {
    const task = await taskService.update(req)
    
    return res.status(200).json(task)
  }

  deleteTask = async (req: Request, res: Response) => {
    await taskService.delete(req, res);
  };

}

export default new TaskController()