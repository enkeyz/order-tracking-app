import React from "react";
import { Container } from "@material-ui/core";

import DashboardHeader from "./DashboardHeader";
import OrderList from "./order/OrderList";
import AddOrderButton from "./order/AddOrderButton";
import OrderFormModal from "./order/OrderFormModal";
import SnackBarPopup from "./SnackBarPopup";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.firebase.auth);
  const { isOpen } = useSelector((state) => state.orderform);

  return (
    <>
      <DashboardHeader userName={displayName} />
      <div onClick={() => dispatch({ type: "NEW_ORDER" })}>
        <AddOrderButton />
      </div>
      <Container maxWidth="sm">
        <OrderList />
      </Container>
      <OrderFormModal
        open={isOpen}
        onClose={() => dispatch({ type: "FINISHED_EDITING" })}
      />
      <SnackBarPopup
        isOpen={true}
        message="Logged in!"
        severity="info"
        duration={5000}
      />
    </>
  );
};

export default Dashboard;
