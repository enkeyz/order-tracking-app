import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {
  logOutWithGoogle,
  removeAllDocsFromCurrentUser,
} from "../../services/firebase/firebase";

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome, {userName}
          </Typography>
          <Button color="inherit" onClick={removeAllDocsFromCurrentUser}>
            Delete all data
          </Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit" onClick={logOutWithGoogle}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DashboardHeader;
