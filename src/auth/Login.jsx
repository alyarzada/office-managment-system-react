import React, { useLayoutEffect } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../validations/login_validation";
import { Box, Button, Stack, FormControlLabel, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLight } from "../app/Slicers/themes";
import CustomTextField from "../components/Form/CustomTextField";

import LoginIcon from "@mui/icons-material/Login";
import logo from "../assets/sidebar/logo.png";

const LoginPage = () => {
  const { light } = useSelector((state) => state.themes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setLight(true));

    return () => {
      dispatch(setLight(false));
    };
  }, []);

  return (
    <Box className="h-screen bg-login-background bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <Box className="w-[400px] rounded">
        <Box className="bg-gray-200 p-5 ">
          <img className="w-[70%] mx-auto" src={logo} alt="logo" />
        </Box>

        <Box className="bg-white p-8">
          <Box className="text-center mb-4 text-textDark2 font-semibold">
            <h4>Daxil olun</h4>
          </Box>

          <Formik
            initialValues={{ username: "", password: "", accept: false }}
            onSubmit={(values) => {
              navigate("/groups-users");
            }}
            validationSchema={LoginSchema}
          >
            {() => (
              <Form>
                <CustomTextField
                  name="username"
                  label="İstifadəçi adı və ya e-poçt ünvanı"
                  variant="outlined"
                />
                <CustomTextField
                  label="Şifrənizi daxil edin"
                  type="password"
                  name="password"
                  variant="outlined"
                />
                <FormControlLabel
                  control={<Checkbox name="accept" />}
                  label="Yadda saxla"
                />
                <Stack direction="row" justifyContent="center" className="my-3">
                  <Button
                    startIcon={
                      <LoginIcon
                        className={light ? "text-white" : "text-black"}
                      />
                    }
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Daxil olun
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
