import React, { useReducer } from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

// mui icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SaveIcon from "@mui/icons-material/Save";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomPasswordField from "../../components/Form/CustomPasswordField";

const initialState = {
  showCurrentPassword: false,
  showNewPassword: false,
  showConfirmPassword: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-current-password":
      return { ...state, showCurrentPassword: !state.showCurrentPassword };
    case "toggle-new-password":
      return { ...state, showNewPassword: !state.showNewPassword };
    case "toggle-confirm-password":
      return { ...state, showConfirmPassword: !state.showConfirmPassword };
  }
};

const MyPassword = () => {
  const [state, dispatch] = useReducer(reducer, initialState);  
  const { light } = useSelector((state) => state.themes);

  return (
    <div>
      <Box>
        <h5 className="text-text3 mb-8">
          <span className="mr-2">
            <AccountCircleIcon className="mr-2" />
          </span>
          ŞİFRƏNİ DƏYİŞDİRİN
        </h5>
      </Box>
      <Box>
        <Formik
          initialValues={{
            email: "",
            password: "",
            newPassword: "",
            confirmNewPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {() => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomTextField
                required
                label="Email"
                name="email"
                className="mb-0"
              />
              <CustomPasswordField required label="Şifrə" name="password" />
              <CustomPasswordField
                label="Yeni şifrə"
                name="newPassword"
                required
              />
              <CustomPasswordField
                label="Yeni şifrəni təsdiqlə"
                name="confirmNewPassword"
                required
              />
              <Box className="col-span-1 md:col-span-2 flex justify-end">
                <Button
                  variant="contained"
                  type="submit"
                  color="success"
                  startIcon={
                    <SaveIcon className={light ? "text-white" : "text-black"} />
                  }
                >
                  Yadda saxla
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default MyPassword;
