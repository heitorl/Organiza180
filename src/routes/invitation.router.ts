// import { Router } from "express";
// import { validateSchema } from "../middlewares";
// import { createGroupSchema } from "../schemas/group.schema";
// import groupController from "../controllers/group.controller";
// import validateToken from "../middlewares/validatedToken.middleware";
// import invitationControllers from "../controllers/invitation.controllers";
// import { createInvitationSchema } from "../schemas/invitation.schema";

// const invitationRouter = Router()

// invitationRouter.post("/create/:groupId", validateToken, validateSchema(createInvitationSchema), invitationControllers.create)
// invitationRouter.get("/accept/:invitationId", validateToken, invitationControllers.invitationAccept)

// export default invitationRouter
