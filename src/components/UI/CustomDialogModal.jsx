import React, { forwardRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Slide,
} from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CustomDialogModal = ({ openDialog, setOpenDialog, handleAgree }) => {
  const handleClose = () => {
    setOpenDialog({
      ...openDialog,
      isOpen: false,
    });
  };

  return (
    <Dialog
      open={openDialog.isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      // sx={{
      //   "& .MuiPaper-root": {
      //     backgroundColor: "#0d1031",
      //     backgroundImage: "none",
      //   },
      // }}
    >
      <DialogTitle>{openDialog.message}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="capitalize" variant="outlined" onClick={handleClose}>
          Ləğv et
        </Button>
        <Button
          className="capitalize"
          variant="contained"
          color="error"
          onClick={handleAgree}
        >
          Bəli
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialogModal;
