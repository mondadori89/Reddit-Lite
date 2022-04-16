import React from "react";

export const Post = (props) => {
  const { post } = props;

  return (
    <div className="post-container">
      <h3>
        {post.data.title}
      </h3>
    </div>
  );
};
