import gql from "graphql-tag";

export default gql`
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
