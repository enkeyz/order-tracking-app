import React, { useState } from "react";
import { Container } from "@material-ui/core";

import DashboardHeader from "./DashboardHeader";
import OrderList from "./order/OrderList";
import AddOrderButton from "./order/AddOrderButton";
import OrderFormModal from "./order/OrderFormModal";
import SnackBarPopup from "./SnackBarPopup";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const [formOpen, setFormOpen] = useState(false);

  const { displayName } = useSelector((state) => state.firebase.auth);

  const handleClickOpen = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  return (
    <>
      <DashboardHeader userName={displayName} />
      <div onClick={handleClickOpen}>
        <AddOrderButton />
      </div>
      <Container maxWidth="sm">
        <OrderList />
      </Container>
      <OrderFormModal open={formOpen} onClose={handleClose} />
      <SnackBarPopup isOpen={true} message="Logged in!" severity="info" />
    </>
  );
};

export default Dashboard;
