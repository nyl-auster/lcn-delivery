import React from "react";

const PostList = ({ posts }) => {
  if (!posts) {
    return <div>Aucun post trouvé</div>;
  }
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PostList;
