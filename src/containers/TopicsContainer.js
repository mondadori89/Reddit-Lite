import React, { useState, useEffect } from "react";

export const TopicsContainer = (props) => {
  const { topics, setTopicFilter } = props;

  const handleClick = ({ target }) => {
    const { name, value } = target;
    setTopicFilter('xxx');
    console.log(target);
    console.log(value);
  }

  return (
    <div className="topics-container">
      <section className="sticky">
        <h2>Topics here</h2> 
        <ul className="topicsList">
            {topics.map(topic => (
                <li
                  className="topicItem"
                  key={topic} 
                  style={{ listStyleType: "none" }}
                  onClick={handleClick}
                  name={topic}
                  value={topic}
                >
                  {topic}
                </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

