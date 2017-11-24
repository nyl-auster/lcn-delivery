import React from "react";
import Delivery from "../components/Delivery";
import Loader from "../../loader/components/Loader";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class DeliveryPage extends React.Component {
  render() {
    if (this.props.data.loading) {
      return (
        <div className="container section">
          <Loader />
        </div>
      );
    }
    return (
      <div className="container section">
        <Delivery {...this.props} />
      </div>
    );
  }
}

const getDelivery = gql`
  query getDelivery($id: ID!) {
    delivery: Delivery(id: $id) {
      id
      cargoamountht
      createdAt
      updatedAt
      pickupaddress
      pickupdatetime
      dropaddress
      dropdatetime
    }
  }
`;

export default graphql(getDelivery, {
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
})(DeliveryPage);
