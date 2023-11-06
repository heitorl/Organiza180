// import * as yup from "yup";

// export const createInvitationSchema = yup.object().shape({
//   email: yup.string().required(),
// });

// export const serializedInvitationSchema = yup.object().shape({
//   sender: yup.object().shape({
//     id: yup.string().required(),
//     name: yup.string().required(),
//     email: yup.string().required(),
//   }),
//   recipient: yup.object().shape({
//     id: yup.string().required(),
//     name: yup.string().required(),
//     email: yup.string().required(),
//   }),
//   group: yup.object().shape({
//     id: yup.string().uuid().required(),
//     name: yup.string().required(),
//     description: yup.string().required(),
//     createdAt: yup.date().required(),
//     updatedAt: yup.date().required(),
//   }),
//   accepted: yup.boolean().required(),
//   id: yup.string().uuid().required(),
// });
