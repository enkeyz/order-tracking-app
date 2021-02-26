import React from "react";
import { Paper } from "@material-ui/core";

const styles = {
  Paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
};

const OrderItem = ({ title }) => {
  return (
    <Paper elevation={2} style={styles.Paper}>
      {title}
    </Paper>
  );
};

export default OrderItem;
