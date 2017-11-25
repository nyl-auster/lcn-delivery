import React from "react";
import DeliveryRequestForm from "../components/DeliveryRequestForm";
import createDelivery from "../queries/createDelivery";
import { graphql } from "react-apollo";

class DeliveryRequestFormPage extends React.Component {
  render() {
    return (
      <div className="container section">
        <DeliveryRequestForm {...this.props} />
      </div>
    );
  }
}

export default graphql(createDelivery, { name: "createDelivery" })(
  DeliveryRequestFormPage
);
