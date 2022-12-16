// Tunar
import React, { useEffect } from "react";
import "./styles/style.css";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import ControlPanelHeader from "./Controlpanelheader";
import LastTasks from "./lastTasks";
import LastActivities from "./LastActivities";
import Charts from "./Charts";
import ControlPanelCalendar from "./Calendar";

// react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ControlPanel = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  useEffect(() => {
    window.scrollTo(0, 0);
    toast("Wow so easy!");
  }, []);

  return (
    <motion.div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      initial={{ x: "50%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      <ControlPanelHeader />
      <LastTasks />
      <LastActivities />
      <Charts />
      <ControlPanelCalendar />
    </motion.div>
  );
};

export default ControlPanel;
