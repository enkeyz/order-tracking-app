import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const LogoutButton = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const signOut = async () => {
    try {
      await firebase.logout();
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button color="inherit" onClick={signOut}>
      Log out
    </Button>
  );
};

export default LogoutButton;
