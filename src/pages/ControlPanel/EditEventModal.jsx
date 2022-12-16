import React from "react";
import { editEvents } from "../../app/Slicers/events";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomTimePicker from "../../components/Form/СustomTimePicker";
import CustomModal from "../../components/UI/CustomModal";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";

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

const EditEventModal = ({ openEditModal, setOpenEditModal, event, title }) => {
  const dispatch = useDispatch();

  return (
    <CustomModal
      title={title}
      open={openEditModal}
      handleClose={() => setOpenEditModal(false)}
    >
      <Formik
        initialValues={{
          id: event.id,
          title: event.title,
          currentDate: event.currentDate,
          startTime: event.startTime,
          endTime: event.endTime,
          comment: event.comment,
        }}
        onSubmit={(values) => {
          dispatch(editEvents({ data: values, id: event.id }));
          setOpenEditModal(false);
        }}
      >
        {() => (
          <Form>
            <Box className="px-6">
              <CustomTextField
                name="currentDate"
                label="Tarix"
                value={event.currentDate}
                readOnly
              />
              <CustomTextField
                label="Başlıq"
                name="title"
                defaultValue={event.title}
              />
              <CustomTimePicker label="Başlanğıc saatı" name="startTime" />
              <CustomTimePicker label="Bitmə saatı" name="endTime" />
              <CustomTextField
                label="Şərh"
                name="comment"
                defaultValue={event.comment}
              />
            </Box>

            {/* footer */}
            <Box className="flex justify-end gap-x-2 p-3 border-t border-t-[#515c69]">
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setOpenEditModal(false);
                }}
              >
                Bagla
              </Button>

              <Button type="submit" variant="contained" color="success">
                Tesdiq edin
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default EditEventModal;
