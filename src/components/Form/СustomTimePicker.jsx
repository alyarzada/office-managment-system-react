import React, { useState, useEffect } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, TextField } from "@mui/material";
import { useField } from "formik";
import dayjs from "dayjs";

const CustomTimePicker = (props) => {
  const [value, setValue] = useState(dayjs());
  const [field, meta, helpers] = useField(props);

  useEffect(() => {
    helpers.setValue(value);
  }, [value]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="mb-6">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          className="w-full"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "28px",
                  paddingBottom: "28px",
                },
              }}
              {...params}
            />
          )}
          {...props}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default CustomTimePicker;
