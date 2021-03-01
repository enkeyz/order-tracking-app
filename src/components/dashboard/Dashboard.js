import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import useRealtimeFirestore from "../../hooks/useRealtimeFirestore";
import { UserContext } from "../../providers/UserProvider";
import DashboardHeader from "./DashboardHeader";
import OrderList from "./order/OrderList";
import AddOrderButton from "./order/AddOrderButton";
import OrderFormModal from "./order/OrderFormModal";
import SnackBarPopup from "./SnackBarPopup";

const Dashboard = () => {
  const user = useContext(UserContext);
  const orderList = useRealtimeFirestore("order-list");
  const [redirect, setRedirect] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleClickOpen = () => {
    setFormOpen(true);
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
      <DashboardHeader
        userName={user && user.displayName ? user.displayName : "Anonymous"}
      />
      <div onClick={handleClickOpen}>
        <AddOrderButton />
      </div>
      <Container maxWidth="sm">
        {orderList && <OrderList orderList={orderList} />}
      </Container>
      <OrderFormModal open={formOpen} onClose={handleClose} />
      <SnackBarPopup isOpen={true} message="Logged in!" severity="info" />
    </>
  );
};

export default Dashboard;
