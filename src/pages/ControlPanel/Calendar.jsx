// Tunar
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Calendar from "react-calendar";
import CalendarEvent from "./CalendarEvent";
import AddEventModal from "./AddEventModal";
import InfoEventModal from "./InfoEventModal";

const ControlPanelCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [calendarModal, setCalendarModal] = useState({
    isOpen: false,
    data: "",
    title: "",
  });
  const [infoModal, setInfoModal] = useState({ isOpen: false, data: "" });

  const { events } = useSelector((state) => state.events);
  const { light } = useSelector((state) => state.themes);
  const { t } = useTranslation();

  const clickDayHandler = (currentDate) => {
    setCalendarModal({ isOpen: true, data: currentDate, title: "Event yarat" });
  };

  const dateHandler = (nextValue) => {
    setDate(nextValue);
  };

  useEffect(() => {
    const reactMonthView = document.querySelector(
      ".react-calendar__month-view__weekdays"
    );

    if (reactMonthView) {
      if (light) {
        reactMonthView.style.color = "#000";
      } else {
        reactMonthView.style.color = "#ced4da";
      }
    }
  }, [light]);

  const viewChangeHandler = () => {
    const reactMonthView = document.querySelector(
      ".react-calendar__month-view__weekdays"
    );

    if (reactMonthView) {
      if (light) {
        reactMonthView.style.color = "#000";
      } else {
        reactMonthView.style.color = "#ced4da";
      }
    }
  };

  return (
    <Box
      className={`${
        light
          ? "bg-bgLight drop-shadow-lg"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      }  my-3 p-4 rounded`}
    >
      <Box className="mb-4">
        <h1
          className={`mb-4 font-semibold text-lg ${
            light ? "text-[#6c757d]" : "text-slate-50"
          } `}
        >
          {t("teqvim")}
        </h1>
      </Box>

      <Box className="flex gap-x-5 flex-col lg:flex-row">
        {/* calendar */}
        <Box className="w-full lg:w-[60%]">
          <Calendar
            className={light ? "secondone" : "secondone"}
            hover={() => console.log("hovered")}
            onClickMonth={(e) => console.log(e)}
            onClickDay={clickDayHandler}
            onChange={dateHandler}
            onViewChange={viewChangeHandler}
            value={date}
            tileClassName={light ? "lightTile" : "darkTile"}
          />
        </Box>

        {/* events */}
        <Box className="w-full flex-1 lg:w-[30%]">
          <ul>
            <AnimateSharedLayout>
              <AnimatePresence>
                {events.length > 0 &&
                  events.map((event, index) => {
                    if (index > 3) return;

                    return (
                      <CalendarEvent
                        key={event.id}
                        event={event}
                        setInfoModal={setInfoModal}
                        setCalendarModal={setCalendarModal}
                      />
                    );
                  })}
              </AnimatePresence>
            </AnimateSharedLayout>
          </ul>
        </Box>

        {/* modals */}
        {calendarModal.isOpen ? (
          <AddEventModal
            calendarModal={calendarModal}
            setCalendarModal={setCalendarModal}
          />
        ) : null}

        {infoModal.isOpen ? (
          <InfoEventModal infoModal={infoModal} setInfoModal={setInfoModal} />
        ) : null}
      </Box>
    </Box>
  );
};

export default ControlPanelCalendar;
