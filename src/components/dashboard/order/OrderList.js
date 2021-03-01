import React, { useState } from "react";
import { Grid, Tabs, Tab } from "@material-ui/core";

import OrderItem from "./OrderItem";
import OrderFilterPanel from "./OrderFilterPanel";

const OrderList = ({ orderList }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Pending" />
        <Tab label="Completed" />
        <Tab label="All" />
      </Tabs>
      <OrderFilterPanel value={value} index={0}>
        {orderList.map((order) => {
          if (order.completed !== false) return null;
          return <OrderItem key={order.id} order={order} />;
        })}
      </OrderFilterPanel>
      <OrderFilterPanel value={value} index={1}>
        {orderList.map((order) => {
          if (order.completed === false) return null;
          return <OrderItem key={order.id} order={order} />;
        })}
      </OrderFilterPanel>

      <OrderFilterPanel value={value} index={2}>
        {orderList.map((order) => {
          return <OrderItem key={order.id} order={order} />;
        })}
      </OrderFilterPanel>
    </>
  );
};

export default OrderList;
