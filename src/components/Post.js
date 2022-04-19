import React from "react";
import { ViewMore } from './ViewMore'

export const Post = (props) => {
  const { post } = props;

  const postText = post.data.selftext;
  const thumbnail = post.data.thumbnail;
  const thumbnailReserva = require("./thumbnail.png");

  return (
    <div className="post-container">
      <a href={post.data.url} target="_blank" rel="noreferrer">
        <img className="postImage" src={thumbnail.length > 10 ? thumbnail : thumbnailReserva} alt={thumbnailReserva}/>
      </a>
      <h3 className="postTitle">
        {post.data.title}
      </h3>
      <h4 className="subredditTag" >{post.data.subreddit}</h4>
      <div className="postText">
        <ViewMore postText={postText} />
      </div>
    </div>
  );
};
