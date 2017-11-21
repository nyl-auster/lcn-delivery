import React from "react";
import PostForm from "../components/PostForm";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class PostFormPage extends React.Component {
  render() {
    return (
      <div className="container">
        <PostForm createPost={this.props.createPost} />
      </div>
    );
  }
}

const createPost = gql`
  mutation createPost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export default graphql(createPost, { name: "createPost" })(PostFormPage);
