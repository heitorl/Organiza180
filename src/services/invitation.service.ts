// import { Request } from "express"
// import { AppDataSource } from "../data-source"
// import { Group, Invitation, User } from "../entities"
// import userRepositorie from "../repositories/user.repositorie"
// import { serializedInvitationSchema } from "../schemas/invitation.schema"
// import notificationService from "./notification.service"
// import { ErrorHandler } from "../errors"

// class InvitationService {

//   SendInvitation = async ({body, decoded, params}: Request) => {

//     const sender = await AppDataSource.getRepository(User).findOne({
//       where: { id: decoded.id },
//     });

//     const recipient = await AppDataSource.getRepository(User).findOne({
//       where: { email: body.email },
//     });

//     const group = await AppDataSource.getRepository(Group).findOne({
//         where: { id: params.groupId },
//     });

//     if(!recipient || !group){
//       throw new Error('Usuário ou grupo inválido');
//     }

//     const userIsMember = group.members.some(member => member.id === recipient.id);
//     console.log(userIsMember)

//     if(userIsMember)
//       throw new ErrorHandler(409, 'Usuário já faz parte do grupo.');

//     const invitation = new Invitation()

//     invitation.sender = sender
//     invitation.recipient = recipient
//     invitation.group = group
//     invitation.accepted = false

//     await AppDataSource.getRepository(Invitation).save(invitation)

//     sender.sentInvitations.push(invitation)
//     recipient.receivedInvitations.push(invitation)

//     await userRepositorie.save(sender)
//     await userRepositorie.save(recipient)

//     console.log("111")

//     const notificationData = {
//       senderId: invitation.sender.id,
//       senderName: invitation.sender.name,
//       recipientId: invitation.recipient.id,
//       recipientName: invitation.recipient.name,
//       groupId: invitation.group.id,
//       groupName: invitation.group.name,
//       groupDescription: invitation.group.description,
//       groupCreatedAt: invitation.group.createdAt,
//       groupUpdatedAt: invitation.group.updatedAt,
//       accepted: invitation.accepted,
//       invitationId: invitation.id,
//     };

//     await notificationService.createNotification(recipient.id, notificationData)
//     console.log("888")
//     return await serializedInvitationSchema.validate(invitation, {
//       stripUnknown: true,
//     })

//   }

//   AcceptInvitation = async ({ decoded, params }: Request) => {

//     const invitation = await AppDataSource.getRepository(Invitation).findOne({
//       where: {id: params.invitationId, accepted: false},
//       relations: ['sender', 'recipient', 'group'],
//     })

//     if (!invitation) {
//       throw new Error('Convite inválido ou já aceito.');
//     }

//     if (invitation.recipient.id !== decoded.id) {
//       throw new Error('Usuário não autorizado a aceitar o convite.');
//     }

//     const group = invitation.group
//     console.log(group, "ANTT")
//     const isMenber = group.members.some((menber) => menber.id === decoded.id)

//     if(isMenber){
//       throw new Error('Usuário já é membro do grupo.');
//     }

//     group.members.push(invitation.recipient);
//     invitation.accepted = true;

//     await AppDataSource.getRepository(Group).save(group);
//     await AppDataSource.getRepository(Invitation).save(invitation);

//     return { message: 'Convite aceito e usuário adicionado ao grupo com sucesso.' };

//   };

// }

// export default new InvitationService()
