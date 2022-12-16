import React, { useState, useEffect } from "react";
import { useField } from "formik";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";

const CustomSelect = ({
  options,
  label,
  defaultValue,
  errorMessage,
  variant,
  ...props
}) => {
  const [personName, setPersonName] = useState([]);

  const [field, meta, helpers] = useField(props);
  const { light } = useSelector((state) => state.themes);
  const { t } = useTranslation();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    helpers.setValue(personName);
  }, [personName]);

  console.log(defaultValue);
  return (
    <Box className="mb-6" sx={{ minWidth: 120 }}>
      <FormControl
        fullWidth
        variant={variant}
        error={meta.error && meta.touched}
      >
        <InputLabel
          id={`${
            variant === "filled"
              ? "demo-simple-select-filled-label"
              : "demo-simple-select-label"
          }`}
        >
          {label}
        </InputLabel>
        <Select
          // defaultValue={personName}
          labelId={`${
            variant === "filled"
              ? "demo-simple-select-filled-label"
              : "demo-simple-select-label"
          }`}
          id={`${
            variant === "filled"
              ? "demo-simple-select-filled"
              : "demo-simple-select"
          }`}
          value={defaultValue ? defaultValue : personName}
          label={label}
          onChange={handleChange}
          {...props}
        >
          {options.length > 0
            ? options.map((option, index) => {
                return (
                  <MenuItem key={index} value={option}>
                    {option.label}
                  </MenuItem>
                );
              })
            : null}
        </Select>
        {meta.error && meta.touched ? (
          <FormHelperText>{errorMessage}</FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
