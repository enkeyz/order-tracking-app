import React from "react";
import { useDispatch } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const EditOrderButton = ({ docId }) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      color="primary"
      aria-label="delete"
      onClick={() => dispatch({ type: "EDIT_ORDER", payload: docId })}
    >
      <EditIcon />
    </IconButton>
  );
};

export default EditOrderButton;
