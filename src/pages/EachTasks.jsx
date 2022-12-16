import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LastTasks from "./ControlPanel/lastTasks";
import { Box, Typography } from "@mui/material";

const EachTasks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();

  return (
    <Box>
      <Typography className="text-white">Task: {id}</Typography>
      <LastTasks />
    </Box>
  );
};

export default EachTasks;
