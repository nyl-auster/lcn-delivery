import gql from "graphql-tag";

export default gql`
  mutation createDelivery(
    $pickupdatetime: DateTime!
    $dropdatetime: DateTime!
    $pickupaddress: String!
    $dropaddress: String!
    $cargoamountht: Float
  ) {
    createDelivery(
      pickupdatetime: $pickupdatetime
      dropdatetime: $dropdatetime
      pickupaddress: $pickupaddress
      dropaddress: $dropaddress
      cargoamountht: $cargoamountht
    ) {
      id
      updatedAt
      createdAt
      pickupdatetime
      dropdatetime
      pickupaddress
      dropaddress
      cargoamountht
    }
  }
`;
