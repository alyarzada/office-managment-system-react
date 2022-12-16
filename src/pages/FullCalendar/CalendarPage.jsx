import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import CustomModal from "../../components/UI/CustomModal";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomTimePicker from "../../components/Form/СustomTimePicker";
import ReplyIcon from "@mui/icons-material/Reply";
// import "@fullcalendar/core/main.css";
import "./styles/styles.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const CalendarPage = () => {
  const { light } = useSelector((state) => state.themes);
  const [eventCreateModal, setEventCreateModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const { t } = useTranslation();

  const [calendarEvents, setCalendarEvents] = useState([]);

  const [events, setEvents] = useState([
    {
      title: "Canlı görüş",
      id: "1",
      bgcolor: "bg-[#0acf9740]",
      color: "#0acf97",
    },
    {
      title: "Video görüş",
      id: "2",
      bgcolor: "bg-[#39afd140]",
      color: "#39afd1",
    },
    {
      title: "Menecerlə görüş",
      id: "3",
      bgcolor: "bg-[#ffbc0040]",
      color: "#ffbc00",
    },
    {
      title: "Təcili görüşlər",
      id: "4",
      bgcolor: "bg-[#fa5c7c40]",
      color: "#fa5c7c",
    },
  ]);

  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });

    const toolbarTitle = document.querySelector(".fc-toolbar-title");
    if (light) {
      toolbarTitle.classList.add("text-dark");
    } else {
      toolbarTitle.classList.remove("text-dark");
    }
  }, [light]);

  const eventClick = (eventClick) => {
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Tədbiri sil",
      cancelButtonText: "Bağla",
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove();
        Alert.fire("Silindi!", "Tədbiriniz silindi.", "success");
      }
    });
  };

  const eventAllowHandler = (dropInfo, draggedEvent) => {
    if (dropInfo.start < new Date()) {
      return false;
    } else {
      return true;
    }
  };

  const handleDateClick = (arg) => {
    console.log(arg);
    setEventCreateModal(true);
    setDate(arg);
  };

  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ opacity: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      <Box
        className={` ${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        } animated fadeIn  demo-app `}
      >
        <Box className="flex p-4 flex-col lg:flex-row">
          <Box
            id="external-events"
            className={`p-[10px] w-full lg:w-[20%] h-auto ${
              light ? "bg-bgLight shadow-2xl" : "bg-slate-800"
            } mr-3 rounded`}
            style={{
              maxHeight: "-webkit-fill-available",
            }}
          >
            <p className="text-[#8391a2]" align="center">
              Tədbirinizi sürükləyin və yaradın
            </p>
            {events.map((event) => (
              <Box
                className={`fc-event flex px-4 items-center ${event.bgcolor} text-[${event.color}]`}
                title={event.title}
                data={event.id}
                key={event.id}
              >
                {event.title}
              </Box>
            ))}
          </Box>
          <Box
            className="demo-app-calendar w-full lg:w-[80%]"
            id="mycalendartest"
          >
            <FullCalendar
              eventAllow={eventAllowHandler}
              defaultView="dayGridMonth"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth, timeGridWeek, timeGridDay, listWeek",
              }}
              height={600}
              rerenderDelay={10}
              eventDurationEditable={false}
              editable={true}
              droppable={true}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              events={calendarEvents}
              eventClick={eventClick}
              selectable={true}
              eventBackgroundColor="green"
              eventColor="white"
              dateClick={handleDateClick}
              // drop={(e) => console.log(e.draggedEl)}
              // eventDrop={this.drop}
              // eventReceive={(e) => console.log(e)}
              // ref={calendarComponentRef}
              // weekends={this.state.calendarWeekends}
              // drop={this.drop}
              // eventReceive={this.eventReceive}
            />
          </Box>
        </Box>

        <Box
          className={`flex justify-between items-center gap-x-1 ${
            light ? "bg-bgLight" : "bg-[#404954]"
          } py-5 px-3 sm:px-6 rounded mt-2`}
        >
          <Link to="/">
            <Button
              startIcon={
                <ReplyIcon className={light ? "text-white" : "text-black"} />
              }
              variant="contained"
              className="capitalize"
            >
              {t("geriqayit")}
            </Button>
          </Link>
        </Box>
      </Box>

      {eventCreateModal ? (
        <CustomModal
          open={eventCreateModal}
          handleClose={() => setEventCreateModal(false)}
          title="Event yarat"
        >
          <Formik
            initialValues={{
              id: uuidv4(),
              date: date,
              eventName: "",
              startTime: "",
              endTime: "",
            }}
            onSubmit={(values) => {
              setCalendarEvents([
                ...calendarEvents,
                {
                  id: uuidv4(),
                  title: values.eventName,
                  start: new Date(`${values.date.dateStr} 00:00`),
                },
              ]);
              setEventCreateModal(false);
            }}
          >
            {() => (
              <Form>
                <CustomTextField
                  name="date"
                  value={date.dateStr}
                  label="Eventin tarixi"
                />
                <CustomTextField name="eventName" label="Eventin adı" />
                <CustomTimePicker label="Başlanğıc saatı" name="startTime" />
                <CustomTimePicker label="Bitmə saatı" name="endTime" />
                <Box className="flex gap-x-2 my-3 justify-end">
                  <Button
                    onClick={() => setEventCreateModal(false)}
                    type="button"
                    variant="outlined"
                    color="error"
                  >
                    Ləğv et
                  </Button>
                  <Button type="submit" variant="contained" color="success">
                    Yarat
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CustomModal>
      ) : null}
    </motion.div>
  );
};

export default CalendarPage;
