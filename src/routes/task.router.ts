import { Router } from "express";
import { validateSchema } from "../middlewares";
import taskController from "../controllers/task.controller";
import { createTaskSchema } from "../schemas/task.schema";
import validateToken from "../middlewares/validatedToken.middleware";

const taskRouter = Router();

taskRouter.post(
  "/createTask",
  validateSchema(createTaskSchema),
  validateToken,
  taskController.createTask
);
taskRouter.get("/allTask/:id", validateToken, taskController.getAllTasks);
taskRouter.patch("/update/:id", validateToken, taskController.updateTask);
taskRouter.delete("/delete/:id", validateToken, taskController.deleteTask);

export default taskRouter;
