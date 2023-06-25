import taskRouter from "./task.router";
import userRouter from "./user.router";
import { Express, Router } from "express"

const Routers = (app: Express): void => {
  app.use('/user', userRouter );
  app.use('/task', taskRouter );
  
}

export default Routers