import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { useField } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomPasswordField = ({ label, required, ...props }) => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [field, meta, helpers] = useField(props);

  useEffect(() => {
    helpers.setValue(values.password);
  }, [values.password]);

  const handleChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel required={required} htmlFor="outlined-adornment-password">
        {label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange}
        required
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        sx={{
          "& .MuiInputBase-input": {
            height: "50px",
          },
        }}
        label={label}
        {...props}
      />
    </FormControl>
  );
};

export default CustomPasswordField;
