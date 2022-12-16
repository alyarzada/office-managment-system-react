// Tunar

import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Breadcrumbs, Box, Typography, Stack, Alert } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";

const TaskDetails = () => {
  const params = useParams();
  const { tasks } = useSelector((state) => state.tasks);
  const task = tasks.find((item) => item.id === params.id);

  if (!task) return <Alert severity="info">Task yoxdur!</Alert>;

  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ x: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      {/* header */}
      <Box className="flex justify-end mb-4">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" className="text-text3" />
            }
            aria-label="breadcrumb"
          >
            <Link to="/" className="text-linkColor text-sm">
              Home
            </Link>
            <Link to="/tasks" className="text-linkColor text-sm">
              Active tasks
            </Link>
            <Typography color="#aab8c5" className="text-sm">
              Tasks
            </Typography>
          </Breadcrumbs>
        </Stack>
      </Box>

      {/* body */}
      <Box className="flex flex-col lg:flex-row gap-x-8">
        <FirstColumn task={task} />
        <SecondColumn task={task} />
      </Box>
    </motion.div>
  );
};

export default TaskDetails;
