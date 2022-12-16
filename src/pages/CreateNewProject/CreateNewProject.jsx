// tunar
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { createProject } from "../../app/Slicers/projects";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
// mui
import { Box, Button, Typography } from "@mui/material";
// icons
import ReplyIcon from "@mui/icons-material/Reply";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
// custom
import CustomTextField from "../../components/Form/CustomTextField";
import CustomFile from "../../components/Form/CustomFile";
import CustomSelect from "../../components/Form/CustomSelect";
import { ProjectSchema } from "../../validations/CreateProjectValidation";

// data
const optionsPer = [
  { label: "Charles Scott", value: "charles" },
  { label: "Marie Ortez", value: "mary" },
  { label: "Travis Hammer", value: "travis" },
  { label: "Lisa Potts", value: "lisa" },
  { label: "Michael Orton", value: "michael" },
  { label: "Kevin McCallister", value: "kevin" },
  { label: "John Henderson", value: "john" },
];

const CreateNewProject = () => {
  const [preview, setPreview] = useState([]);
  const [allFiles, setAllFiles] = useState([]);
  const [age, setAge] = useState("");
  const { t } = useTranslation();
  const { light, disableTransform } = useSelector((state) => state.themes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <motion.div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ opacity: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      <Box className="flex justify-between">
        <h4
          className={`${light ? "text-textDark2" : "text-white"}  font-medium`}
        >
          {t("yenilayihe")}
        </h4>
      </Box>

      <Box
        className={`my-5 rounded ${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        } w-full`}
      >
        <Formik
          initialValues={{
            id: uuidv4(),
            projectName: "",
            aboutProject: "",
            teamMembers: [],
            files: [],
          }}
          onSubmit={(values) => {
            console.log(values);
            dispatch(createProject(values));
            navigate("/projects");
          }}
          validationSchema={ProjectSchema}
        >
          {(props) => (
            <Form>
              <Box className="flex flex-nowrap flex-col md:flex-row py-6 px-6">
                <Box className="md:w-2/4 w-full mr-10">
                  <CustomTextField name="projectName" label="Layihənin adı" />
                  <CustomTextField
                    name="aboutProject"
                    rows="5"
                    label="Layihə haqqında məlumat"
                  />
                  <Box className="mb-6">
                    <CustomSelect
                      options={optionsPer}
                      label="Komanda üzvləri"
                      name="teamMembers"
                      multiple
                      errorMessage="Ən az bir komanda üzvü seçin"
                    />
                  </Box>
                </Box>
                {/* form2 */}
                <Box className="md:w-2/4 w-full">
                  <Box className="mb-4">
                    <Box
                      className={`cursor-pointer border border-dashed ${
                        light ? "border-black" : "border-[#ffffff4f]"
                      }  py-[50px] text-center rounded-lg`}
                    >
                      <CustomFile
                        preview={preview}
                        setPreview={setPreview}
                        setAllFiles={setAllFiles}
                        allFiles={allFiles}
                        name="files"
                      />
                    </Box>
                    <Box className="flex gap-2 mt-3 p-3 flex-wrap border border-[#ffffff4f] rounded-sm">
                      {preview.length > 0 ? (
                        preview.map((item, index) => (
                          <img
                            width={100}
                            className="rounded-sm my-1"
                            src={item}
                            alt="preview"
                            key={index}
                          />
                        ))
                      ) : (
                        <Box>
                          <Typography className="text-text1">
                            Seçilmiş fayl yoxdur
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                className={`${
                  light ? "bg-bgLight" : "bg-[#404954]"
                } flex justify-between py-5 px-3 sm:px-6 rounded mt-4`}
              >
                <Link to="/" className="capitalize">
                  <Button
                    startIcon={
                      <ReplyIcon
                        className={light ? "text-white" : "text-black"}
                      />
                    }
                    variant="contained"
                    className="capitalize "
                  >
                    {t("geriqayit")}
                  </Button>
                </Link>
                <Button
                  startIcon={
                    <TaskAltRoundedIcon
                      className={light ? "text-white" : "text-black"}
                    />
                  }
                  variant="contained"
                  color="success"
                  type="submit"
                  className="capitalize ml-auto "
                >
                  {t("yarat")}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </motion.div>
  );
};

export default CreateNewProject;
