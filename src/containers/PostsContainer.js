import React, { useState, useEffect } from "react";
import { Post } from '../components/Post';

export const PostsContainer = (props) => {
  const { posts } = props;

  return (
    <div>
      <section>
        <h2>Posts here</h2> 
        <ul>
            {posts.map(post => (
                <li key={post.data.id}>
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

