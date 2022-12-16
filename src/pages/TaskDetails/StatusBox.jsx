import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomDialogModal from "../../components/UI/CustomDialogModal";

const StatusBox = ({ color, title, icon, hover }) => {
  const [open, setOpen] = useState({ isOpen: false, message: title });

  return (
    <Box
      onClick={() => {
        setOpen({ ...open, isOpen: true });
      }}
      className={`w-full md:w-28 text-center border border-solid ${color.border} ${color.text} bg-transparent ${hover} hover:text-white px-3 py-3 cursor-pointer duration-300 mx-1 rounded-lg`}
    >
      {icon}
      <Typography>{title}</Typography>
      <CustomDialogModal openDialog={open} setOpenDialog={setOpen} />
    </Box>
  );
};

export default StatusBox;
