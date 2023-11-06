// import { Request, Response } from "express"
// import { groupService } from "../services"

// class GroupController {

//   create = async (req: Request, res: Response) => {
//     const group = await groupService.create(req)

//     return res.status(201).json(group)
//   }

//   listGroups = async (req: Request, res: Response) => {
//     try{
//       const groups = await groupService.retrieve(req)

//       return res.status(200).json(groups)
//     }catch (error){
//       console.log(error)
//     }

//   }
// }

// export default new GroupController()
