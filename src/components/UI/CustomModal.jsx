import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const CustomModal = ({ children, title, handleClose }) => {
  const { light } = useSelector((state) => state.themes);

  return (
    <Backdrop>
      <motion.div
        className={`w-[90%] sm:w-[80%] md:w-[36%]   ${
          light ? "bg-[#fff]" : "bg-[#020a15]"
        }  shadow-lg rounded-xl`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={dropIn}
        onClick={(e) => e.stopPropagation()}
      >
        <Box className="px-6 py-4">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="mb-6"
          >
            <Typography
              className={`${light ? "text-textDark2" : "text-text1"} text-lg`}
            >
              {title}
            </Typography>
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Stack>

          <Box>{children}</Box>
        </Box>
      </motion.div>
    </Backdrop>
  );
};

export default CustomModal;
