import React, { useState } from "react";

export const PostsContainer = (props) => {
  const { posts } = props;

  return (
    <div>
      <section>
        <h2>Posts here</h2> 
        <h3>Some post</h3>
      </section>
      <hr />
    </div>
  );
};