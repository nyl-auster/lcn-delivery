import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  if (!posts) {
    return <div>Aucun post trouvé</div>;
  }
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <PostListItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
