// import { Request, Response } from "express";
// import { invitationService } from "../services";
// import { DatabaseError } from "pg";

// class InvitationController {

//   create = async (req: Request, res: Response) => {
//     try{
//       const invitation = await invitationService.SendInvitation(req)

//       return res.status(201).json(invitation)

//     }catch(err){
//       if (err instanceof DatabaseError) {
//         return res.status(409).send({ error: err.detail });
//       }
//       res.status(400).send({ error: err.error });
//     }
//   }

//   invitationAccept = async (req: Request, res: Response) => {
//     try{
//       const invitation = await invitationService.AcceptInvitation(req)

//       return res.status(201).json(invitation)

//     }catch(err){

//       if (err instanceof DatabaseError) {
//         return res.status(409).send({ error: err.detail });
//       }
//       res.status(400).send({ error: (err as Error).message });
//     }
//   }
// }

// export default new InvitationController()
