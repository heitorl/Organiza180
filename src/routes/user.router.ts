import { Router } from "express";
import userController from "../controllers/user.controller";
import { createUserSchema, loginSchema } from "../schemas/user.schema";
import { validateSchema, verifyEmailExist } from "../middlewares";

const userRouter = Router();

userRouter.post(
  "/signup",
  validateSchema(createUserSchema),
  verifyEmailExist,
  userController.create
);
userRouter.post("/signin", validateSchema(loginSchema), userController.login);

export default userRouter;
