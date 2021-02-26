import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { signInWithGoogle } from "../services/firebase/firebase";
import { UserContext } from "../providers/UserProvider";

const Login = () => {
  const user = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (user && !redirect) {
      setRedirect("/dashboard");
    }
  }, [user, redirect]);

  if (user && redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        LogIn with Google
      </Button>
    </Box>
  );
};

export default Login;
