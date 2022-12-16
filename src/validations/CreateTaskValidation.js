import * as Yup from "yup";

export const CreateTaskValidation = Yup.object().shape({
  taskName: Yup.string().required(),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
  taskDetails: Yup.string().required(),
  projects: Yup.array().of(Yup.object()).min(1).required(),
  responsiblePeople: Yup.array().of(Yup.object()).min(1).required(),
});
