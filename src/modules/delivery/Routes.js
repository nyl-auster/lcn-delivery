import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import DeliveryRequestFormPage from "./pages/DeliveryRequestFormPage";
import DeliveryRequestViewPage from "./pages/DeliveryRequestViewPage";

export default () => {
  return [
    <Route exact path="/delivery-form" component={DeliveryRequestFormPage} />,
    <Route exact path="/delivery/:id" component={DeliveryRequestViewPage} />
  ];
};
