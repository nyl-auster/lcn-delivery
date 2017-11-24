import React from "react";
import DeliveryForm from "../components/DeliveryForm";
import createDelivery from "../queries/createDelivery";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class DeliveryFormPage extends React.Component {
  render() {
    return (
      <div className="container section">
        <DeliveryForm {...this.props} />
      </div>
    );
  }
}

export default graphql(createDelivery, { name: "createDelivery" })(
  DeliveryFormPage
);
