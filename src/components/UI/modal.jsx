import React from "react";
import { motion } from "framer-motion";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const dropIn = {
  hidden: {
    scale: 0.5,
    x: "-50%",
    y: "-50%",
  },
  visible: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  },
  exit: {
    scale: 0.5,
    transition: {
      duration: 0.3,
    },
    x: "-50%",
    y: "-50%",
  },
};

const Modal = ({ children }) => {
  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="backdrop"
    >
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 absolute top-1/2 left-1/2 bg-gradient-to-r from-mainPrimary to-mainSecondary rounded p-5"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
