import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { logOutWithGoogle } from "../../services/firebase/firebase";
import OrderFormModal from "./Order/OrderFormModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const DashboardHeader = ({ logOut, userName }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome, {userName}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleModal}>
            Add new order
          </Button>
          <Button color="inherit" onClick={logOutWithGoogle}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      {openModal && <OrderFormModal />}
    </div>
  );
};

export default DashboardHeader;
