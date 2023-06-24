import { Request } from "express";
import { User } from "../../entities";

declare module "express" {
  interface Request {
    validated?: User;
    decoded?: User;
  }
}