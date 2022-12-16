import React from "react";
import { addEvents } from "../../app/Slicers/events";
import { AddEventSchema } from "../../validations/AddEventModalValidation";
import { Formik, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";

import CustomTextField from "../../components/Form/CustomTextField";
import CustomModal from "../../components/UI/CustomModal";
import CustomTimePicker from "../../components/Form/СustomTimePicker";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const AddEventModal = ({ calendarModal, setCalendarModal }) => {
  const dispatch = useDispatch();
  const currentDate =
    calendarModal.data.getDate() +
    " " +
    months[calendarModal.data.getMonth()] +
    " " +
    calendarModal.data.getFullYear();

  return (
    <CustomModal
      title={calendarModal.title}
      open={calendarModal.isOpen}
      handleClose={() => setCalendarModal({ ...calendarModal, isOpen: false })}
    >
      <Formik
        initialValues={{
          id: uuidv4(),
          title: "",
          currentDate: currentDate,
          startTime: "",
          endTime: "",
          comment: "",
        }}
        onSubmit={(values) => {
          dispatch(addEvents(values));
          setCalendarModal({ ...calendarModal, isOpen: false });

          const array = document.querySelectorAll(".react-calendar__tile");
          array.forEach((item) => {
            if (
              item.classList.contains("react-calendar__tile--active") &&
              !item.classList.contains("react-calendar__tile--now")
            ) {
              item.style.backgroundColor = "#727cf5";
              item.style.borderRadius = "3px";
              item.setAttribute("title", values.title);
            }
          });
        }}
        validationSchema={AddEventSchema}
      >
        {() => (
          <Form>
            <Box>
              <CustomTextField
                name="currentDate"
                label="Tarix"
                value={currentDate}
                readOnly
              />
              <CustomTextField label="Başlıq" name="title" />
              <CustomTimePicker label="Başlanğıc saatı" name="startTime" />
              <CustomTimePicker label="Bitmə saatı" name="endTime" />
              <CustomTextField label="Şərh" name="comment" />
            </Box>

            {/* footer */}
            <Box className="flex justify-end gap-x-2">
              <Button
                className="capitalize"
                variant="outlined"
                color="error"
                onClick={() => {
                  setCalendarModal({ ...calendarModal, isOpen: false });
                }}
              >
                Bağla
              </Button>

              <Button
                className="capitalize"
                type="submit"
                variant="contained"
                color="success"
              >
                Təsdiq edin
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default AddEventModal;
