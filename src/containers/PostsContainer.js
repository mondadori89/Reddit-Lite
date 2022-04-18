import React, { useState, useEffect } from "react";
import { Post } from '../components/Post';

export const PostsContainer = (props) => {
  const { posts } = props;

  return (
    <div className="allPostsContainer">
      <section>
        <ul >
            {posts.map(post => (
                <li key={post.data.id} style={{ listStyleType: "none" }}>
                    <Post
                        post={post}
                    />
                </li>
            ))}
        </ul>
      </section>
      <hr />
    </div>
  );
};

