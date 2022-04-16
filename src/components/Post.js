import React from "react";

export const Post = (props) => {
  const { post } = props;

  const postText = post.data.selftext;
  const thumbnailReserva = 'https://b.thumbs.redditmedia.com/xerVblnhtgBmXjB5ZeYDzZ5MN9MqVmDAR5fdGa7aG_A.jpg';

  return (
    <div className="post-container">
      <h4 className="subredditTag" >Subreddit: {post.data.subreddit}</h4>
      <img className="postImage" src={post.data.thumbnail !== 'self' ? post.data.thumbnail : thumbnailReserva}/>
      <h3>
        {post.data.title}
      </h3>
      
      <br></br>
      <div>
        <p>Text: {postText ? postText : 'no text' }</p>
      </div>
    </div>
  );
};
