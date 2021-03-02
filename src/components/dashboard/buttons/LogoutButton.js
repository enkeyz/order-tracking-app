import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const LogoutButton = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const signOut = () => {
    firebase.logout().then(() => {
      history.push("/");
    });
  };

  return (
    <Button color="inherit" onClick={signOut}>
      Log out
    </Button>
  );
};

export default LogoutButton;
