import React from "react";

export default ({ post }) => {
  return (
    <div className="post-list-item">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <hr />
    </div>
  );
};
