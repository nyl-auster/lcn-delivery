import gql from "graphql-tag";

export default gql`
  mutation createDelivery(
    $pickupDateTime: DateTime!
    $dropDateTime: DateTime!
    $pickupAddress: String!
    $dropAddress: String!
    $cargoAmountHt: Float
  ) {
    createDelivery(
      pickupDateTime: $pickupDateTime
      dropDateTime: $dropDateTime
      pickupAddress: $pickupAddress
      dropAddress: $dropAddress
      cargoAmountHt: $cargoAmountHt
    ) {
      id
    }
  }
`;
