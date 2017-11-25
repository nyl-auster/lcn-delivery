import gql from "graphql-tag";

export default gql`
  query allDeliveries {
    deliveries: allDeliveries {
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
