import React from "react";
import { Box, Button, Stack, Typography, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomSelect from "../../components/Form/CustomSelect";
import ReplyIcon from "@mui/icons-material/Reply";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import { createUser } from "../../app/Slicers/users";
import { v4 as uuidv4 } from "uuid";

const initialValues = {
  id: uuidv4(),
  name: "",
  email: "",
  personalNumber: "",
  corporativeNumber: "",
  job: "",
  project: "",
  department: "",
  dependentUser: "",
  permission: "",
  password: "",
  confirmPassword: "",
  created: new Date().getDate(),
};

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

const CreateUser = () => {
  const dispatch = useDispatch();
  const { light } = useSelector((state) => state.themes);

  return (
    <Box>
      <Stack className="mb-6" direction="row" justifyContent="space-between">
        <Typography className="text-text1" component="h2" variant="h6">
          Yeni istifadeci yarat
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Ana Sehife
          </Link>
          <Typography color="text.primary">Yeni istifadeci yarat</Typography>
        </Breadcrumbs>
      </Stack>

      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
            dispatch(createUser(values));
          }}
        >
          {() => (
            <Form>
              <CustomTextField
                variant="filled"
                label="Ad"
                name="name"
                required
              />
              <CustomTextField
                label="Elektron poçt ünvanı"
                name="email"
                variant="filled"
                required
              />
              <CustomTextField
                label="Şəxsi nömrə"
                name="personalNumber"
                variant="filled"
              />
              <CustomTextField
                label="Korperativ nömrə"
                name="corporativeNumber"
                variant="filled"
              />
              <CustomTextField
                variant="filled"
                label="Vəzifə"
                multiline
                name="job"
              />
              <CustomSelect
                label="Layihə"
                multiline
                options={optionsProj}
                name="project"
                variant="filled"
              />
              <CustomSelect
                label="Şöbə"
                multiline
                options={optionsProj}
                name="department"
                variant="filled"
              />
              <CustomTextField
                label="Tabe olan istifadəçi"
                name="dependentUser"
                variant="filled"
              />
              <CustomSelect
                label="İcazə"
                multiline
                options={optionsProj}
                name="permission"
                variant="filled"
              />
              <CustomTextField
                variant="filled"
                label="Şifrə"
                required
                name="password"
              />
              <CustomTextField
                label="Şifrənin təsdiqlənməsi"
                name="confirmPassword"
                variant="filled"
              />
              <Stack direction="row" justifyContent="space-between">
                <Button
                  startIcon={
                    <ReplyIcon
                      className={light ? "text-white" : "text-black"}
                    />
                  }
                  className="rounded-sm capitalize"
                  variant="contained"
                  color="primary"
                >
                  Geri
                </Button>
                <Button
                  className="rounded-sm capitalize"
                  variant="contained"
                  color="success"
                  type="submit"
                  startIcon={
                    <TaskAltRoundedIcon
                      className={light ? "text-white" : "text-black"}
                    />
                  }
                >
                  Yarat
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateUser;
