import React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddOrderButton = () => {
  return (
    <Fab
      size="medium"
      color="primary"
      style={{ position: "fixed", top: "5rem", right: "1rem" }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddOrderButton;
