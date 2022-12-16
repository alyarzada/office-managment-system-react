import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import CustomModal from "../../components/UI/CustomModal";
import CustomTextField from "../../components/Form/CustomTextField";

const InfoEventModal = ({ infoModal, setInfoModal }) => {
  console.log(infoModal.data);
  return (
    <CustomModal
      open={infoModal.isOpen}
      handleClose={() => setInfoModal({ ...infoModal, isOpen: false })}
    >
      <Box className="px-6">
        <Formik
          initialValues={{
            date: infoModal.data.currentDate,
            startTime: infoModal.data.startTime,
            endTime: infoModal.data.endTime,
            comment: infoModal.data.comment,
          }}
        >
          {() => (
            <Form>
              <CustomTextField
                name="date"
                label="Yaradıldı"
                readOnly
                value={infoModal.data.currentDate}
              />
              <CustomTextField
                name="startTime"
                label="Başlanğıc saatı"
                readOnly
                value={`${infoModal.data.startTime.$H}:${infoModal.data.startTime.$m}`}
              />
              <CustomTextField
                name="endTime"
                label="Bitmə saatı"
                readOnly
                value={`${infoModal.data.endTime.$H}:${infoModal.data.endTime.$m}`}
              />
              <CustomTextField
                name="comment"
                label="Ətraflı"
                readOnly
                value={infoModal.data.comment}
              />
            </Form>
          )}
        </Formik>
      </Box>

      <Box className="flex justify-end p-3 border-t border-t-[#515c69]">
        <Button
          variant="contained"
          color="error"
          onClick={() => setInfoModal({ ...infoModal, isOpen: false })}
        >
          Bagla
        </Button>
      </Box>
    </CustomModal>
  );
};

export default InfoEventModal;
