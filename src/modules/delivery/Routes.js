import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import DeliveryRequestFormPage from "./pages/DeliveryFormPage";
import DeliveryRequestViewPage from "./pages/DeliveryPage";

export default () => {
  return [
    <Route exact path="/delivery-form" component={DeliveryRequestFormPage} />,
    <Route exact path="/delivery/:id" component={DeliveryRequestViewPage} />
  ];
};
