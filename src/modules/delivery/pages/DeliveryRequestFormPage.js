import React from "react";
import DeliveryRequestForm from "../components/DeliveryRequestForm";
import createDelivery from "../queries/createDelivery";
import { graphql } from "react-apollo";

class DeliveryRequestFormPage extends React.Component {
  handleSubmit = deliveryData => {
    this.props
      .createDelivery({
        variables: deliveryData
      })
      .then(result => {
        this.props.history.push(
          "/delivery-requests/" + result.data.createDelivery.id
        );
      });
  };
  render() {
    return (
      <div className="container section">
        <DeliveryRequestForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default graphql(createDelivery, { name: "createDelivery" })(
  DeliveryRequestFormPage
);
