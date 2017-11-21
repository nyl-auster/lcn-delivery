import React from "react";
import DeliveryForm from "../components/delivery/DeliveryForm";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class DeliveryFormPage extends React.Component {
  render() {
    return (
      <div className="container">
        <DeliveryForm {...this.props} createPost={this.props.createPost} />
      </div>
    );
  }
}

const createDelivery = gql`
  mutation createDelivery($title: String!, $content: String!) {
    createDelivery(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export default graphql(createDelivery, { name: "createPost" })(
  DeliveryFormPage
);
