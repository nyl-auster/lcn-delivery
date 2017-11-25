import gql from "graphql-tag";

export default gql`
  query getDelivery($id: ID!) {
    delivery: Delivery(id: $id) {
      id
      cargoAmountHt
      createdAt
      updatedAt
      pickupAddress
      pickupDateTime
      dropAddress
      dropDateTime
    }
  }
`;
