import React, { useState, useReducer } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import {
  Box,
  Tab,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Formik, Form, FieldArray } from "formik";

// mui icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SaveIcon from "@mui/icons-material/Save";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomDatePicker from "../../components/Form/CustomDatePicker";
import MyDetails from "./MyDetails";
import MyPassword from "./MyPassword";

const ProfileForm = () => {
  const [value, setValue] = useState("1");
  const [date, setDate] = useState(null);
  const { light } = useSelector((state) => state.themes);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              sx={{ minWidth: "50%" }}
              className="text-text3"
              label="Mənim detallarım"
              value="1"
            />
            <Tab
              sx={{ minWidth: "50%" }}
              className="text-text3"
              label="Şifrəm"
              value="2"
            />
          </TabList>
        </Box>

        <TabPanel value="1" className="p-0 mt-5">
          <MyDetails />
        </TabPanel>
        <TabPanel value="2" className="p-0 mt-5">
          <MyPassword />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ProfileForm;
