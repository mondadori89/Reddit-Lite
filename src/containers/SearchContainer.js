import React, { useState, useEffect } from "react";

export const SearchContainer = (props) => {
  const { searchTerm, setSearchTerm, posts, setPosts, topics, setTopics } = props;

  const url = 'https://www.reddit.com/search.json?q=';
  let searchTermOnAPI = searchTerm;

  const apiFetch = async() => {
    const endpoint = `${url}${searchTermOnAPI}`;
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        //
        const jsonResponse = await response.json();
        setPosts(jsonResponse.data.children);
        console.log(jsonResponse.data.children);
        
        let tempTopics = [];
        for (let i = 0; i < jsonResponse.data.children.length; i++) {
          let jsonSubreddit = jsonResponse.data.children[i].data.subreddit;
          tempTopics.push(jsonSubreddit);
        }
        let uniqueTopics = [...new Set(tempTopics)];
        setTopics(uniqueTopics);
        console.log(uniqueTopics);

      } 
    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    apiFetch();
  };

  useEffect(() => {
    searchTermOnAPI = 'spacex';
    apiFetch();
    console.log('whazaaaaaaaaaa');
  }, []);
    
  return (
    <div>
      <section>
        <h2>Search bar</h2> 
            <form onSubmit={handleSubmit}>
                <input
                    value={searchTerm || ''}
                    type="text"
                    placeholder="Type something here"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
      </section>
      <br />
    </div>
  );
};


