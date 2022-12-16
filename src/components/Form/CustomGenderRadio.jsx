import React, { useState, useEffect } from "react";
import { useField } from "formik";
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";

const CustomGenderRadio = (props) => {
  const [field, meta, helpers] = useField(props);
  const [value, setValue] = useState("female");

  useEffect(() => {
    helpers.setValue(value);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className='text-text1'>
      <FormLabel id="demo-controlled-radio-buttons-group">Cins</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};

export default CustomGenderRadio;
