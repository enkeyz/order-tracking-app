import React from "react";

import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";

const CompleteOrderButton = ({ docId }) => {
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);

  const updateOrder = () => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("orders")
      .doc(docId)
      .update({
        completedOn: new Date(Date.now()).toLocaleDateString(),
        orderStatus: "completed",
      });
  };

  return (
    <IconButton color="primary" aria-label="done" onClick={updateOrder}>
      <DoneIcon />
    </IconButton>
  );
};

export default CompleteOrderButton;
