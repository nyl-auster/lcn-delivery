import React from "react";
import DeliveryForm from "../components/delivery/DeliveryForm";
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

const createDelivery = gql`
  mutation createDelivery(
    $pickupdatetime: DateTime!
    $dropdatetime: DateTime!
    $pickupaddress: String!
    $dropaddress: String!
    $cargoamountht: Float
  ) {
    createDelivery(
      pickupdatetime: $pickupdatetime
      dropdatetime: $dropdatetime
      pickupaddress: $pickupaddress
      dropaddress: $dropaddress
      cargoamountht: $cargoamountht
    ) {
      id
      updatedAt
      createdAt
      pickupdatetime
      dropdatetime
      pickupaddress
      dropaddress
      cargoamountht
    }
  }
`;

export default graphql(createDelivery, { name: "createDelivery" })(
  DeliveryFormPage
);
