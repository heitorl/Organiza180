import admin from "firebase-admin";

export const sendNotification = async (
  token: string,
  title: string,
  body: any
) => {
  const message = {
    token,
    notification: {
      title,
      body,
    },
  };

  try {
    const response = await admin.messaging().send(message);

    console.log("Successfully sent message:", response);
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Error sending notification");
  }
};
