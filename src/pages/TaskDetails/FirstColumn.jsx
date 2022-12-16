// Tunar

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../app/Slicers/tasks";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  TextareaAutosize,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AttachFileIcon from "@mui/icons-material/AttachFile";

// modal
import img from "../../assets/avatar-4.jpg";
import CustomMenu from "../../components/UI/CustomMenu";
import CreateSubTaskModal from "./CreateSubTaskModal";
import CustomDialogModal from "../../components/UI/CustomDialogModal";
import Subtask from "./Subtask";

const FirstColumn = ({ task }) => {
  const { light } = useSelector((state) => state.themes);

  const [openSubTaskModal, setOpenSubTaskModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openDialog, setOpenDialog] = useState({
    isOpen: false,
    message: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // delete task
  const deleteHandler = () => {
    setOpenMenu(null);
    setOpenDialog({
      isOpen: true,
      message: "Bu taskı silmək istədiyinizə əminsiniz?",
    });
  };

  // edit task
  const editHandler = () => {
    setOpenMenu(null);
  };

  const handleAgree = () => {
    dispatch(deleteTask(task.id));
    navigate("/");
  };

  return (
    <Box className="w-full">
      <Box
        className={`${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        } rounded p-5 mb-5 `}
      >
        <Box
          className={`${light ? "text-textDark2" : "text-text3"} mb-2 relative`}
        >
          <Box className="flex justify-between items-start">
            <h1 className="font-semibold">{task.taskName}</h1>
            <CustomMenu
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              onEdit={editHandler}
              onDelete={deleteHandler}
            />
          </Box>

          <CustomDialogModal
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            handleAgree={handleAgree}
          />

          <Box>
            <Typography className="mb-8 w-fit text-xs rounded p-0.5">
              Devam edir
            </Typography>
            <h5 className=" mb-2">Taskin detallari:</h5>
          </Box>

          <Box className="bg-[#464f5b] text-text3 absolute right-0 top-6 rounded w-40 py-1 invisible">
            <List>
              <ListItem className="cursor-pointer px-5 py-2 hover:bg-[#4d5764] text-sm">
                <EditIcon className="mr-2 text-sm" />
                <span>Düzəliş</span>
              </ListItem>
              <ListItem className="cursor-pointer px-5 py-2 hover:bg-[#4d5764] text-sm">
                <DeleteIcon className="mr-2 text-sm" />
                <span>Sil</span>
              </ListItem>
              <ListItem className="cursor-pointer px-5 py-2 hover:bg-[#4d5764] text-sm">
                <PersonIcon className="mr-2 text-sm" />
                <span>Dəvət et</span>
              </ListItem>
              <ListItem className="cursor-pointer px-5 py-2 hover:bg-[#4d5764] text-sm">
                <ExitToAppIcon className="mr-2 text-sm" />
                <span>Transfer</span>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box className="mb-10 ">
          <Typography className={`${light ? "text-textDark3" : "text-text2"}`}>
            {task.taskDetails}
          </Typography>
        </Box>

        <Box
          className={`font-semibold ${light ? "text-textDark2" : "text-text2"}`}
        >
          {/* sub-task creation panel */}
          <Box className="flex justify-between mb-3 pb-2 border-b border-solid border-text3">
            <h5>Sab tasklar</h5>
            <Button
              variant="contained"
              className="capitalize"
              color="success"
              onClick={() => setOpenSubTaskModal(true)}
            >
              Yeni sub-task yarat
            </Button>
            <CreateSubTaskModal
              title="Yeni Sub-task yarat"
              task={task}
              id={task.id}
              open={openSubTaskModal}
              setOpen={setOpenSubTaskModal}
            />
          </Box>

          <Box>
            {task.subTasks.length > 0
              ? task.subTasks.map((subTask) => {
                  return <Subtask key={subTask.id} {...subTask} />;
                })
              : null}
          </Box>
        </Box>
      </Box>

      <Box
        className={`${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        } text-text3 rounded p-5`}
      >
        <Box className={`mb-4 ${light ? "text-textDark2" : ""}`}>
          <h3>Serhler</h3>
        </Box>

        <Box>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Metni daxil edin"
            className="w-full h-24 rounded p-2 bg-[#404954] mb-2"
          />
          <Box className="flex justify-end items-center gap-x-5">
            <IconButton>
              <AttachFileIcon className="rotate-45" />
            </IconButton>
            <Button sx={{ backgroundColor: "#727cf5" }} variant="contained">
              Gonder
            </Button>
          </Box>
        </Box>

        <Box>comments</Box>
      </Box>
    </Box>
  );
};

export default FirstColumn;
