import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const SnackBarPopup = ({ isOpen, message, severity }) => {
  const [state, setState] = useState({
    open: isOpen,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Snackbar
      autoHideDuration={6000}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackBarPopup;
