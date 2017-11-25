import gql from "graphql-tag";

export default gql`
  query allDeliveries {
    deliveries: allDeliveries {
      id
      createdAt
      updatedAt
      dropAddress
      pickupAddress
      pickupDateTime
      dropAddress
      dropAddressPhone
      cargoDescription
      dropDateTime
      cargoAmountHt
    }
  }
`;
