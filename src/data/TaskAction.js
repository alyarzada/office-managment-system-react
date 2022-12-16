import React, { useState } from "react";
import {
  Box,
  IconButton,
  Button,
  Tooltip,
  Stack,
  Modal,
  Fade,
  Grow,
  Zoom,
  Backdrop,
  Snackbar,
  Slide,
} from "@mui/material";

import { Delete, Edit, Visibility } from "@mui/icons-material";
import { deleteTask } from "../app/Slicers/tasks";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { CreateTaskValidation } from "../validations/CreateTaskValidation";
import { editTask } from "../app/Slicers/tasks";

import CustomDialogModal from "../components/UI/CustomDialogModal";
import CustomTextField from "../components/Form/CustomTextField";
import CustomDatePicker from "../components/Form/CustomDatePicker";
import CustomFile from "../components/Form/CustomFile";
import CustomSelect from "../components/Form/CustomSelect";

//multiselect
const optionsProj = [
  { label: "Port Baku Residence", value: "portbaku" },
  { label: "Absheron Apartments", value: "absheron" },
  { label: "Bilgah Estate", value: "bilgah" },
  { label: "Crescent", value: "crescent" },
  { label: "Baku City Villas", value: "bakucity" },
  { label: "Expo Center", value: "expo" },
  { label: "Crescent", value: "crescent" },
];
const optionsPer = [
  { label: "Charles Scott", value: "charles" },
  { label: "Marie Ortez", value: "mary" },
  { label: "Travis Hammer", value: "travis" },
  { label: "Lisa Potts", value: "lisa" },
  { label: "Michael Orton", value: "michael" },
  { label: "Kevin McCallister", value: "kevin" },
  { label: "John Henderson", value: "john" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const TaskActions = ({ params }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    open: false,
    Transition: Slide,
  });

  const dispatch = useDispatch();
  const { light } = useSelector((state) => state.themes);
  const { t } = useTranslation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAgree = () => {
    dispatch(deleteTask(params.id));
  };

  const setDialog = {
    openDialog,
    setOpenDialog,
    handleAgree,
  };

  const openSnackHandler = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const closeSnackHandler = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Box>
      <Tooltip title="View room details">
        <IconButton onClick={() => console.log(params)}>
          <Visibility />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this room">
        <IconButton
          onClick={() => {
            handleOpen();
          }}
        >
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this room">
        <IconButton
          onClick={() => {
            setOpenDialog({
              isOpen: true,
              message: "Bu taskı silmək istədiyinizə əminsiniz?",
            });
            openSnackHandler(SlideTransition);
          }}
        >
          <Delete />
        </IconButton>
      </Tooltip>

      <CustomDialogModal {...setDialog} />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Formik
              initialValues={{
                id: params.id,
                taskName: params.row.taskName,
                startDate: params.row.startDate,
                endDate: params.row.endDate,
                taskDetails: params.row.taskDetails,
                files: params.row.files,
                projects: params.row.projects,
                responsiblePeople: params.row.responsiblePeople,
                subTasks: params.row.subTasks,
                actions: params.row.actions,
              }}
              onSubmit={(values) => {
                console.log(values);
                dispatch(editTask({ id: params.id, values: values }));
                handleClose();
              }}
              validationSchema={CreateTaskValidation}
            >
              {(props) => (
                <Form>
                  <Stack direction="row" spacing={2}>
                    <Box className="w-1/2">
                      <CustomTextField
                        name="taskName"
                        label={t("taskinadi")}
                        variant="outlined"
                        className="w-full"
                        defaultValue={params.row.taskName}
                      />
                      <CustomDatePicker
                        htmlFor="startdate"
                        label="baslamatarixi"
                        name="startDate"
                        showTimeInput
                        defaultValue={params.row.startDate}
                      />
                      <CustomDatePicker
                        htmlFor="enddate"
                        label="bitmetarixi"
                        name="endDate"
                        showTimeInput
                        defaultValue={params.row.endDate}
                      />
                      <CustomTextField
                        multiline
                        id="comments"
                        rows="3"
                        name="taskDetails"
                        label={t("reydaxiledin")}
                        defaultValue={params.row.taskDetails}
                      />
                    </Box>

                    <Box className="w-1/2">
                      <Box
                        className={`cursor-pointer mb-2 border border-dashed ${
                          light ? "border-black" : "border-[#ffffff4f]"
                        }  py-20 text-center rounded-lg`}
                      >
                        <CustomFile name="files" />
                      </Box>
                      <Box className="mb-6">
                        <CustomSelect
                          label="Layihe"
                          name="projects"
                          options={optionsProj}
                          errorMessage="Ən az bir layihə seçin"
                          multiple
                          defaultValue={params.row.projects}
                        />
                      </Box>
                      <Box className="mb-6">
                        <CustomSelect
                          label="Məsul şəxslər"
                          name="responsiblePeople"
                          errorMessage="Ən az bir məsul şəxs seçin"
                          options={optionsPer}
                          multiple
                          defaultValue={params.row.responsiblePeople}
                        />
                      </Box>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button
                      onClick={handleClose}
                      variant="outlined"
                      color="error"
                    >
                      Ləğv et
                    </Button>
                    <Button type="submit" variant="contained" color="success">
                      Təsdiq et
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Fade>
      </Modal>

      <Snackbar
        open={state.open}
        onClose={closeSnackHandler}
        TransitionComponent={state.Transition}
        message="Yeni task yaradıldı"
        key={state.Transition.name}
      />
    </Box>
  );
};

export default TaskActions;
