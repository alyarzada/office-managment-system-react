import React from "react";
import { TextField, Box } from "@mui/material";
import { useField } from "formik";

const CustomTextField = ({
  component,
  multiline,
  label,
  sx,
  className,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  return (
    <Box className={`mb-6 ${className}`} sx={sx}>
      <TextField
        className="w-full"
        autoComplete="off"
        id="outlined-basic"
        multiline={multiline}
        label={label}
        error={meta.error && meta.touched}
        onChange={(e) => helpers.setValue(e.target.value)}
        helperText={meta.error && meta.touched && "Bu xana boş ola bilməz"}
        sx={{
          "& .MuiInputBase-input": {
            height: "50px",
          },
        }}
        {...props}
      />
    </Box>
  );
};

export default CustomTextField;
