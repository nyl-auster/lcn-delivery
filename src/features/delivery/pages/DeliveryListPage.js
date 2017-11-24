import React from "react";
import DeliveryList from "../components/DeliveryList";
import Loader from "../../loader/components/Loader";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class DeliveryListPage extends React.Component {
  render() {
    const { loading, posts } = this.props.data;
    return (
      <div className="container">
        {loading ? <Loader /> : <DeliveryList posts={posts} />}
      </div>
    );
  }
}

const getAllDeliveries = gql`
  query allPosts {
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
