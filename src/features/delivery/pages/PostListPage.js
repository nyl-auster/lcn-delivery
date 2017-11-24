import React from "react";
import PostList from "../components/post/PostList";
import Loader from "../components/loader/Loader";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class PostListPage extends React.Component {
  render() {
    const { loading, posts } = this.props.data;
    return (
      <div className="container">
        {loading ? <Loader /> : <PostList posts={posts} />}
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
