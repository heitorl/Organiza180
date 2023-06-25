import { Request } from "express";
import { Task, User } from "../../entities";

declare module "express" {
  interface Request {
    validated?: User | Task;
    decoded?: User;
  }
}