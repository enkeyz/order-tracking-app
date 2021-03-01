import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Tabs, Tab } from "@material-ui/core";

import OrderItem from "./OrderItem";
import OrderFilterPanel from "./OrderFilterPanel";

const OrderList = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/orders`,
    storeAs: "orders",
  });
  const orders = useSelector((state) => state.firestore.data.orders);
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
        {orders &&
          Object.values(orders).map((order) => {
            if (order.completed !== false) return null;
            return <OrderItem key={order.orderId} order={order} />;
          })}
      </OrderFilterPanel>
      <OrderFilterPanel value={value} index={1}>
        {orders &&
          Object.values(orders).map((order) => {
            if (order.completed === false) return null;
            return <OrderItem key={order.orderId} order={order} />;
          })}
      </OrderFilterPanel>

      <OrderFilterPanel value={value} index={2}>
        {orders &&
          Object.values(orders).map((order) => {
            return <OrderItem key={order.orderId} order={order} />;
          })}
      </OrderFilterPanel>
    </>
  );
};

export default OrderList;
