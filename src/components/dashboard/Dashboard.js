import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import useRealtimeFirestore from "../../hooks/useRealtimeFirestore";

import { UserContext } from "../../providers/UserProvider";
import DashboardHeader from "./DashboardHeader";
import OrderList from "./Order/OrderList";

const Dashboard = () => {
  const user = useContext(UserContext);
  const orderList = useRealtimeFirestore("order-list");
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (!user) setRedirect("/");
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <DashboardHeader userName={user ? user.displayName : ""} />
      {orderList && <OrderList orderList={orderList} />}
    </>
  );
};

export default Dashboard;
