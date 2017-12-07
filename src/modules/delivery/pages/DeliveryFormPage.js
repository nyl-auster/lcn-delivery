import React from "react";
import DeliveryForm from "../components/DeliveryForm";
import createDelivery from "../queries/createDelivery";
import { graphql } from "react-apollo";

class DeliveryFormPage extends React.Component {
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
        <DeliveryForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default graphql(createDelivery, { name: "createDelivery" })(
  DeliveryFormPage
);
