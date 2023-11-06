import express, { NextFunction, Request, Response } from "express";
import Routers from "./routes";
import cors from "cors";
import { errorHandler } from "./errors";
// import NotificationRouter from "./notification-router";

const app = express();

app.use(express.json());

app.use(cors());

app.use(
  cors({
    origin: "*",
  })
);

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  return errorHandler(err, res);
});

// NotificationRouter(app);

Routers(app);

export default app;
