import React, { useState } from "react";

export const ViewMore = (props) => {
  const { postText } = props;
  const [viewButtonText, setViewButtonText] = useState('View more');
  const [viewButtonClicked, setViewButtonClicked] = useState(false);


  const handleClick = () => {
    setViewButtonClicked(!viewButtonClicked);  
    if (viewButtonClicked) { setViewButtonText('View more') }
    else { setViewButtonText('View less') }
  }

  const textParagraf = () => {
    if (viewButtonClicked) {
      return (
        <p>{postText}</p>
      )
    } else {
      return
    }
  } 

  return (
    <div 
        className="postViewMore" 
        style={{visibility: postText ? 'visible' : 'hidden' }}
    >
      <button onClick={handleClick}>{viewButtonText}</button>
      {textParagraf()}
    </div>
  );
};
