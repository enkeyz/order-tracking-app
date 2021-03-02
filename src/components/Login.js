import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = async () => {
    await firebase.login({
      provider: "google",
      type: "popup",
    });
    history.push("/dashboard");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Typography variant="h2" style={{ marginBottom: "1rem" }}>
        Order tracking app
      </Typography>
      <Typography variant="h5" style={{ marginBottom: "3rem" }}>
        with Redux and Firebase
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={signInWithGoogle}
        style={{ marginBottom: "1rem" }}
      >
        LogIn with Google
      </Button>
    </Box>
  );
};

export default Login;
