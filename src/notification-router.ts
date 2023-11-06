// import admin from "firebase-admin"
// import app from "./app";
// import validateToken from "./middlewares/validatedToken.middleware";
// import { AppDataSource } from "./data-source";
// import { Device, User } from "./entities";
// import { Request, Express, Response } from "express";
// import { sendNotification } from "./utils/sendNotification"
// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// })

// const NotificationRouter = (app: Express) => {
//   app.post('/register-device/:userId', async (req: Request, res: Response) => {
//     const { token } = req.body;
//     console.log(token);
//     const user = await AppDataSource.getRepository(User).findOne({
//       where: { id: req.params.userId }
//     });

//     // Verificar se o token já existe no banco de dados para o usuário atual
//     const existingDevice = await AppDataSource.getRepository(Device).findOne({
//       where: { userId: user.id }
//     });

//     if (existingDevice) {
//       // Verificar se o token é diferente do que já está registrado
//       if (existingDevice.token !== token) {
//         // Atualizar o token existente para o novo token
//         existingDevice.token = token;
//         await AppDataSource.getRepository(Device).save(existingDevice);
//       }
//       // O dispositivo já está registrado para o usuário, retornar uma resposta de erro
//       return res.status(200).json({ message: 'Token Device for this user as updated.' });
//     }

//     // Criar o registro do dispositivo
//     const device = await AppDataSource.getRepository(Device).save({
//       userId: user.id,
//       token: token
//     });

//     console.log(device)
//     res.status(200).json({ message: 'Device registered successfully!' });
//   });

//   app.post('/send-notification', async (req, res) => {
//     const { token, title, body } = req.body;

//     try {
//       await sendNotification(token, title, body);
//       res.status(200).json({ message: 'Notification sent successfully!' });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       res.status(500).json({ message: 'Error sending notification' });
//     }
//   });

// };

// export default NotificationRouter
