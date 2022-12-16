import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required().min(6),
  password: Yup.string().required().min(6),
  accept: Yup.boolean(true).required(),
});
