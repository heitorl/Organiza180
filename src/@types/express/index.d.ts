import { Request } from "express";
import { Group, Task, User } from "../../entities";

declare module "express" {
  interface Request {
    validated?: User | Task | Group;
    decoded?: User;
  }
}