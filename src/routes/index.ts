import userRouter from "./user.router";
import { Express, Router } from "express"

const Routers = (app: Express): void => {
  app.use('/user', userRouter );
  
}

export default Routers