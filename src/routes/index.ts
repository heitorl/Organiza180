// import groupRouter from "./group.router";
// import invitationRouter from "./invitation.router";
import taskRouter from "./task.router";
import userRouter from "./user.router";
import { Express, Router } from "express";

const Routers = (app: Express): void => {
  app.use("/user", userRouter);
  app.use("/task", taskRouter);
  // app.use('/group', groupRouter );
  // app.use('/invitation', invitationRouter );
};

export default Routers;
