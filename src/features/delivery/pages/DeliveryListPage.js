import React from "react";
import DeliveryList from "../components/DeliveryList";
import Loader from "../../app/components/Loader";
import getAllDeliveries from "../queries/getAllDeliveries";
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

export default graphql(getAllDeliveries)(DeliveryListPage);
