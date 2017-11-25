import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import DeliveryRequestFormPage from "./pages/DeliveryRequestFormPage";
import DeliveryRequestViewPage from "./pages/DeliveryRequestViewPage";

export default () => {
  return (
    <div>
      <Route
        exact
        path="/delivery-requests-form"
        component={DeliveryRequestFormPage}
      />
      <Route
        exact
        path="/delivery-requests/:id"
        component={DeliveryRequestViewPage}
      />
    </div>
  );
};
