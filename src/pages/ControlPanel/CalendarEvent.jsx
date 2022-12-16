import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Box, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvents } from "../../app/Slicers/events";

// icons
import EventIcon from "@mui/icons-material/Event";
import CustomMenu from "../../components/UI/CustomMenu";
import CustomDialogModal from "../../components/UI/CustomDialogModal";
import EditEventModal from "./EditEventModal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CalendarEvent = ({ event, setInfoModal }) => {
  const btnRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDialog, setOpenDialog] = useState({ message: "", isOpen: false });
  const [openEditModal, setOpenEditModal] = useState(false);
  const { light } = useSelector((state) => state.themes);

  const dispatch = useDispatch();

  const deleteHandle = () => {
    setOpenDialog({
      message: "Bu eventi silmək istədiyinizə əminsiniz?",
      isOpen: true,
    });
    setOpenMenu(false);
  };

  const editHandle = () => {
    setOpenEditModal(true);
    setOpenMenu(false);
  };

  const handleAgree = () => {
    dispatch(deleteEvents(event.id));
    setOpenDialog({ ...openDialog, isOpen: false });
    const allCalendarItems = document.querySelectorAll(".react-calendar__tile");
    allCalendarItems.forEach((calendarItem) => {
      if (calendarItem.title === event.title) {
        calendarItem.style.backgroundColor = "";
        calendarItem.style.borderRadius = "0px";
        calendarItem.removeAttribute("title");
      }
    });
  };

  return (
    <motion.li
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`mb-5 flex justify-between ${
        light
          ? "bg-bgLight"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      }  p-3 rounded z-10 relative drop-shadow-lg pb-8`}
    >
      <Box>
        <Typography className="text-textmuted flex items-center gap-x-1">
          <EventIcon className="text-[15px]" />
          <span>{`${event.currentDate}: Saat ${event.startTime.$H}:${event.startTime.$m} - ${event.endTime.$H}:${event.endTime.$m} arası`}</span>
        </Typography>
        <Typography
          onClick={() => setInfoModal({ data: event, isOpen: true })}
          className="text-[#727cf5] font-medium capitalize cursor-pointer"
          variant="contained"
        >
          {event.title}
        </Typography>
      </Box>

      <Box className="relative">
        <IconButton
          ref={btnRef}
          className="text-black"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <MoreHorizIcon
            className={`${light ? "text-black" : "text-text1"} `}
          />
        </IconButton>
        <CustomMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          onDelete={deleteHandle}
          onEdit={editHandle}
          ref={btnRef}
          editDelete
        />
      </Box>

      <CustomDialogModal
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        handleAgree={handleAgree}
      />

      <EditEventModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        event={event}
        title="Eventi düzəlt"
      />
    </motion.li>
  );
};

export default CalendarEvent;
