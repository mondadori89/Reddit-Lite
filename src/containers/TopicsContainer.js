import React from "react";

export const TopicsContainer = (props) => {
  const { topics, setTopicFilter } = props;

  const handleClick = ({ target }) => {
    const topicSelected = target.innerHTML;
    if (topicSelected === 'All') {
      setTopicFilter('')
    }
    else {
      setTopicFilter(topicSelected);
    }
    console.log(`You selected "${topicSelected}" as topicFilter`)
  }

  return (
    <div className="topics-container">
      <section className="sticky">
        <h2>Sub Topics</h2> 
        <ul className="topicsList">
            <li
              className="topicItem"
              key="All"
              onClick={handleClick}
              style={{ listStyleType: "none" /* not necessary, just for education */}}
            >
              All
            </li>
            {topics.map(topic => (
                <li
                  className="topicItem"
                  key={topic} 
                  onClick={handleClick}
                >
                  {topic}
                </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

