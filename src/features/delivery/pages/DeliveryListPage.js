import React from "react";
import DeliveryList from "../components/DeliveryList";
import Loader from "../../loader/components/Loader";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class DeliveryListPage extends React.Component {
  render() {
    const { loading, deliveries } = this.props.data;
    return (
      <div className="container">
        {loading ? <Loader /> : <DeliveryList deliveries={deliveries} />}
      </div>
    );
  }
}

const getAllDeliveries = gql`
  query allDeliveries {
    deliveries: allDeliveries {
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

export default graphql(getAllDeliveries)(DeliveryListPage);
