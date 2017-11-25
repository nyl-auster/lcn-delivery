import gql from "graphql-tag";

export default gql`
  mutation createDelivery(
    $pickupDateTime: DateTime!
    $dropDateTime: DateTime!
    $pickupAddress: String!
    $dropAddress: String!
    $dropAddressPhone: String!
    $dropAddressNote: String!
    $cargoDescription: String!
    $cargoAmountHt: Float
  ) {
    createDelivery(
      pickupDateTime: $pickupDateTime
      dropDateTime: $dropDateTime
      pickupAddress: $pickupAddress
      dropAddress: $dropAddress
      dropAddressPhone: $dropAddressPhone
      dropAddressNote: $dropAddressNote
      cargoAmountHt: $cargoAmountHt
      cargoDescription: $cargoDescription
    ) {
      id
    }
  }
`;
