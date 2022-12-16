import * as Yup from "yup";

export const AddEventSchema = Yup.object().shape({
  title: Yup.string().required(),
  comment: Yup.string().required(),
});
