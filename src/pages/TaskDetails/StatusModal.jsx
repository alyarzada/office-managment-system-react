// Tunar

import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Button, Box, Typography } from "@mui/material";
import CustomDialogModal from '../../components/UI/CustomDialogModal'

const dropIn = {
  hidden: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  visible: {
    x: "-50%",
    y: "-50%",
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  },
  exit: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
};

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1.2,
  },
  exit: {
    opacity: 0,
  },
};

const StatusModal = ({ active, setActive }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="backdrop"
    >
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`fixed w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 top-1/2 left-1/2 p-4 z-30 rounded ${active.color.bg}`}
      >
        <h4>{active.title}</h4>
        <hr />
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          quidem a quae accusantium. Possimus illum maxime voluptates et facilis
          animi.
        </p>
        <div className="flex justify-end gap-x-2">
          <Button
            onClick={() => {
              setActive({
                ...active,
                check: false,
              });
            }}
            variant="outlined"
            color="error"
          >
            Ləğv et
          </Button>
          <Button color="success" variant="contained">
            Təsdiq et
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StatusModal;
