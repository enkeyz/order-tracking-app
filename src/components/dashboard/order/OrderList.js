import React from "react";
import { Grid } from "@material-ui/core";

import OrderItem from "./OrderItem";

const OrderList = ({ orderList }) => {
  return (
    <Grid
      container
      justify="center"
      alignItem="center"
      direction="column"
      spacing={2}
      style={{ marginTop: "1rem" }}
    >
      {orderList.map((order) => {
        return <OrderItem key={order.id} order={order} />;
      })}
    </Grid>
  );
};

export default OrderList;
