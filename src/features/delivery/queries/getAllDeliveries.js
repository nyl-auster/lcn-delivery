import gql from "graphql-tag";

export default gql`
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
