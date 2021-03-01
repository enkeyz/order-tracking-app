import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}
export default App;
