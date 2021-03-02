import React from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteOrderButton = ({ docId }) => {
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);

  const removeOrder = () => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("orders")
      .doc(docId)
      .delete();
  };

  return (
    <IconButton color="primary" aria-label="delete" onClick={removeOrder}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteOrderButton;
