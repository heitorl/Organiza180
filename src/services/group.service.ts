// import { Request } from "express";
// import { AppDataSource } from "../data-source";
// import { Group, User } from "../entities";
// import { serializedCreateGroupSchema } from "../schemas/group.schema";
// import { group } from "console";

// class GroupService {

//   create = async ({ validated, decoded }: Request) => {

//     let group = await AppDataSource.getRepository(Group).save({...(validated as Group)})

//     const user = await AppDataSource.getRepository(User).findOne({
//           where: { id: decoded.id },
//     });

//     group.members = [user];
//     group = await AppDataSource.getRepository(Group).save(group);

//     return await serializedCreateGroupSchema.validate(group, {
//       stripUnknown: true,
//     })
//   }

//   retrieve = async ({ decoded }: Request) => {

//     const groupsForUser = await AppDataSource.getRepository(User).findOne({
//       where: { id: decoded.id },
//       relations: ['groups'], // Carrega os grupos relacionados
//     });

//     if(!groupsForUser){
//       return {}
//     }

//     return groupsForUser
//   }

// }

// export default new GroupService()
