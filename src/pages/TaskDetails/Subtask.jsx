import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Checkbox,
  LinearProgress,
  styled,
} from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Subtask = ({ subTaskName, subTasks }) => {
  const [progressValue, setProgressValue] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  //   useEffect(() => {
  //     setProgressValue(100 / subTasks.length);
  //     setCheckedItems(subTasks.filter((item) => item.checked === true));
  //   }, [subTasks]);

  //   useEffect(() => {
  //     setProgressValue(checkedItems.length * (100 / subTasks.length));
  //   }, [checkedItems]);

  //   const checkTodo = (id, checked) => {
  //     setData(
  //       subTasks.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, checked: checked };
  //         }
  //         return item;
  //       })
  //     );
  //   };

  return (
    <Box className="border-b mb-5">
      <h5>{subTaskName}</h5>
      <Box>
        {subTasks.map((item) => (
          <Box className="flex items-center" key={item.id}>
            <Checkbox onChange={(e) => console.log("id")} />
            <Typography>{item.title}</Typography>
          </Box>
        ))}
      </Box>
      <BorderLinearProgress variant="determinate" value={progressValue} />
    </Box>
  );
};

export default Subtask;
