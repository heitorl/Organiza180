import * as yup from "yup"

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
});

const serializedCreateUserSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  email: yup.string().email().required(),
  name: yup.string().required(),

});

const loginSchema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
});






export { createUserSchema, serializedCreateUserSchema, loginSchema }