import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email('invalid email').required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
//   projects: Yup.string().required(),
//   categories: Yup.string().required(),
  rights: Yup.string().required(),
});
