import * as Yup from "yup";

export const ProjectSchema = Yup.object().shape({
  projectName: Yup.string().required(),
  aboutProject: Yup.string().required(),
  teamMembers: Yup.array().of(Yup.object()).min(1).required(),
});
