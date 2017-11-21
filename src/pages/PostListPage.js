import React from "react";
import PostList from "../components/PostList";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class PostListPage extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Chargement ...</div>;
    }
    return (
      <div className="container">
        <PostList posts={this.props.data.posts} />
      </div>
    );
  }
}

const getAllPosts = gql`
  query allPosts {
    posts: allPosts {
      id
      title
      content
    }
  }
`;

export default graphql(getAllPosts)(PostListPage);
