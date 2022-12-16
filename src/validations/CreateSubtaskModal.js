import * as Yup from "yup";

export const SubtaskSchema = Yup.object().shape({
  subTaskName: Yup.string().required(),
  responsiblePeople: Yup.array().of(Yup.object()).min(1).required(),
  subTasks: Yup.array().of(Yup.object()).min(2).required(),
});
