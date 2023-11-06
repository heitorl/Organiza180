import * as yup from "yup";

export const createTaskSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().notRequired(),
  status: yup.string(),
  dificulty: yup.string().required(),
});

export const serializedCreateTaskSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  title: yup.string().required(),
  description: yup.string().notRequired(),
  status: yup.string().notRequired(),
  dificulty: yup.string().notRequired(),
  user: yup.object().notRequired().shape({
    id: yup.string().uuid(),
    email: yup.string().email(),
    name: yup.string(),
  }),
});

export const serializedAllTasksSchema = yup.object().shape({
  id: yup.string(),
  title: yup.string(),
  description: yup.string(),
  status: yup.string().notRequired(),
  dificulty: yup.string().notRequired(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  user: yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string(),
  }),
});
