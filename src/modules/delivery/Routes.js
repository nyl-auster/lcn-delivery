import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import DeliveryFormPage from "./pages/DeliveryFormPage";
import DeliveryPage from "./pages/DeliveryPage";
import DeliveryListPage from "./pages/DeliveryListPage";

export default () => {
  return [
    <Route exact path="/delivery-form" component={DeliveryFormPage} />,
    <Route exact path="/deliveries/:id" component={DeliveryPage} />,
    <Route exact path="/deliveries" component={DeliveryListPage} />
  ];
};
