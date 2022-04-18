import React from "react";
import { Post } from '../components/Post';

export const PostsContainer = (props) => {
  const { posts, topicFilter, postsFiltered } = props;

  let postsToRender = posts;
  if (topicFilter) {
    postsToRender = postsFiltered;
  }


  return (
    <div className="allPostsContainer">
      <section>
        <ul >
            {postsToRender.map(post => (
                <li key={post.data.id} style={{ listStyleType: "none" }}>
                    <Post
                        post={post}
                    />
                </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

