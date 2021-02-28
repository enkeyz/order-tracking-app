import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import useRealtimeFirestore from "../../hooks/useRealtimeFirestore";
import { UserContext } from "../../providers/UserProvider";
import DashboardHeader from "./DashboardHeader";
import OrderList from "./order/OrderList";
import AddOrderButton from "./order/AddOrderButton";
import OrderFormModal from "./order/OrderFormModal";

const Dashboard = () => {
  const user = useContext(UserContext);
  const orderList = useRealtimeFirestore("order-list");
  const [redirect, setRedirect] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleClickOpen = () => {
    setFormOpen(true);
    console.log("clicked");
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  useEffect(() => {
    if (!user) setRedirect("/");
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <DashboardHeader userName={user ? user.displayName : ""} />
      <div onClick={handleClickOpen}>
        <AddOrderButton />
      </div>
      <Container maxWidth="sm">
        {orderList && <OrderList orderList={orderList} />}
      </Container>
      <OrderFormModal open={formOpen} onClose={handleClose} />
    </>
  );
};

export default Dashboard;
