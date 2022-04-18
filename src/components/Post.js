import React from "react";

export const Post = (props) => {
  const { post } = props;

  const postText = post.data.selftext;
  const thumbnail = post.data.thumbnail;
  const thumbnailReserva = 'https://b.thumbs.redditmedia.com/xerVblnhtgBmXjB5ZeYDzZ5MN9MqVmDAR5fdGa7aG_A.jpg';

  return (
    <div className="post-container">
      <h4 className="subredditTag" >Topic: {post.data.subreddit}</h4>
    
      <a href={post.data.url} target="_blank" rel="noreferrer">
        <img className="postImage" src={thumbnail.length > 10 ? thumbnail : thumbnailReserva} alt={thumbnailReserva}/>
      </a>
      <h3>
        {post.data.title}
      </h3>
      <div>
        <p>Text: {postText ? postText : 'no text' }</p>
      </div>
    </div>
  );
};
