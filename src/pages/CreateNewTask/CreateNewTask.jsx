// Tunar
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./styles/styles.css";

// mui-material
import { Breadcrumbs, Typography, Stack, Box, Button } from "@mui/material";

// mui-icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ReplyIcon from "@mui/icons-material/Reply";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

// redux-toolkit
import { useDispatch } from "react-redux";
import { createNewTask } from "../../app/Slicers/tasks";

// Formik and yup
import { Formik, Form } from "formik";
import CustomDatePicker from "../../components/Form/CustomDatePicker";
import CustomSelect from "../../components/Form/CustomSelect";
import CustomFile from "../../components/Form/CustomFile";
import CustomTextField from "../../components/Form/CustomTextField";
import { CreateTaskValidation } from "../../validations/CreateTaskValidation";

// select-data
const optionsProj = [
  { label: "Port Baku Residence", value: "portbaku" },
  { label: "Absheron Apartments", value: "absheron" },
  { label: "Bilgah Estate", value: "bilgah" },
  { label: "Crescent", value: "crescent" },
  { label: "Baku City Villas", value: "bakucity" },
  { label: "Expo Center", value: "expo" },
];
const optionsPer = [
  { label: "Charles Scott", value: "charles" },
  { label: "Marie Ortez", value: "mary" },
  { label: "Travis Hammer", value: "travis" },
  { label: "Lisa Potts", value: "lisa" },
  { label: "Michael Orton", value: "michael" },
  { label: "Kevin McCallister", value: "kevin" },
  { label: "John Henderson", value: "john" },
];

const CreateNewTask = () => {
  const [allFiles, setAllFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  const { t } = useTranslation();
  const { light, disableTransform } = useSelector((state) => state.themes);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    <Link to="/" underline="hover" key="1" className="text-[#727cf5]">
      Home
    </Link>,
    <Typography key="2" className="text-[#aab8c5] ">
      Task
    </Typography>,
  ];

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
          {t("yenitaskyarat")}
        </h4>
        <Box className="hidden lg:block">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-linkColor" />
              }
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      <Formik
        initialValues={{
          id: uuidv4(),
          taskName: "",
          startDate: "",
          endDate: "",
          taskDetails: "",
          files: [],
          projects: [],
          responsiblePeople: [],
          subTasks: [],
          actions: [],
        }}
        onSubmit={(values) => {
          dispatch(createNewTask(values));
          navigate("/tasks");
          console.log(values);
        }}
        validationSchema={CreateTaskValidation}
      >
        {({ values, setFieldValue }) => (
          <Form
            className={`my-5 rounded ${
              light
                ? "bg-bgLight drop-shadow-lg"
                : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
            } w-full `}
          >
            <Box className="flex flex-nowrap flex-col gap-y-0 md:gap-y-6 md:flex-row px-2 sm:px-4 md:px-6 py-6">
              <Box className="md:w-2/4 w-full md:mr-10">
                <CustomTextField
                  name="taskName"
                  label={t("taskinadi")}
                  variant="outlined"
                  className="w-full"
                />
                <Box className="mb-6">
                  <CustomDatePicker
                    htmlFor="startdate"
                    label="Başlama tarixi"
                    name="startDate"
                    showTimeInput
                  />
                </Box>
                <CustomDatePicker
                  htmlFor="enddate"
                  label="Bitmə tarixi"
                  name="endDate"
                  showTimeInput
                />
                <CustomTextField
                  multiline
                  id="comments"
                  rows="3"
                  name="taskDetails"
                  label={t("reydaxiledin")}
                />
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
                        <Box className="relative" key={index}>
                          <img
                            width={100}
                            className="rounded-sm my-1"
                            src={item}
                            alt="preview"
                          />
                        </Box>
                      ))
                    ) : (
                      <Box>
                        <Typography className="text-text1">
                          Seçilmiş fayl yoxdur!
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box className="mb-6 ">
                  <CustomSelect
                    label="Layihe"
                    name="projects"
                    options={optionsProj}
                    errorMessage="Ən az bir layihə seçin"
                    multiple
                  />
                </Box>
                <Box className="mb-6">
                  <CustomSelect
                    label="Məsul şəxslər"
                    name="responsiblePeople"
                    errorMessage="Ən az bir məsul şəxs seçin"
                    options={optionsPer}
                    multiple
                  />
                </Box>
              </Box>
            </Box>

            <Box
              className={`flex justify-between items-center gap-x-1 ${
                light ? "bg-bgLight" : "bg-[#404954]"
              } py-5 px-3 sm:px-6 rounded mt-2`}
            >
              <Link to="/">
                <Button
                  startIcon={
                    <ReplyIcon
                      className={light ? "text-white" : "text-black"}
                    />
                  }
                  variant="contained"
                  className="capitalize"
                >
                  {t("geriqayit")}
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="success"
                className="capitalize"
                startIcon={
                  <TaskAltRoundedIcon
                    className={light ? "text-white" : "text-black"}
                  />
                }
              >
                {t("yarat")}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default CreateNewTask;
