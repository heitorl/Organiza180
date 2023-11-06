// import { Request } from "express";
// import { AppDataSource } from "../data-source";
// import { Notification } from "../entities/Notification";
// import { sendNotification } from "../utils/sendNotification";
// import { Device } from "../entities";
// import axios from "axios";
// class NotificationService {

//   createNotification = async (userId: string, message: object): Promise<Notification> => {
//     const notificationRepository = AppDataSource.getRepository(Notification);

//     const notification = new Notification();
//     notification.userId = userId;
//     notification.message = message;

//     await notificationRepository.save(notification);
//     console.log(userId, '---')
//     const device = await AppDataSource.getRepository(Device).findOne({
//       where: { userId: userId }
//     });
//     console.log(device)
//     try {
//       await axios.post('http://localhost:3000/send-notification', {
//         token: device.token,
//         title: 'Novo evento',
//         body: 'Você recebeu uma nova notificação!'
//       });

//       console.log('Notification sent successfully!');
//     } catch (error) {
//       console.error('Error sending notification:', error);
//     }

//     return notification;
//   };

//   retrieveNotifications = async ({decoded}: Request) => {
//     const notifications = await AppDataSource.getRepository(Notification).find({
//       where: {userId: decoded.id}
//     })

//     return notifications
//   }

// }

// export default new NotificationService();
