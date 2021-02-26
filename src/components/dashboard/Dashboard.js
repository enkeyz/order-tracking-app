import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { UserContext } from "../../providers/UserProvider";
import { logOut } from "../../services/firebase/firebase";

const Dashboard = () => {
  const user = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (!user) setRedirect("/");
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <header>
        <h1>Dashboard</h1>
        <p>Welcome, {user && user.displayName}</p>
      </header>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button variant="contained" color="primary" onClick={logOut}>
          Log out
        </Button>
      </Box>
    </>
  );
};

export default Dashboard;
