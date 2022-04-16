import React, { useState, useEffect } from "react";

export const SearchContainer = (props) => {
  const { searchTerm, setSearchTerm, posts, setPosts } = props;

  const url = 'https://www.reddit.com/search.json?q=';


  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
    const endpoint = `${url}${searchTerm}`;
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            setPosts(jsonResponse.data.children);
            console.log(jsonResponse.data.children);
        }   
    } catch(error) {
        console.log(error);
    }
  };

    
  return (
    <div>
      <section>
        <h2>Search bar here</h2> 
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
      <hr />
    </div>
  );
};


/*
<form onSubmit={handleSubmit}>
          <input
            value={profile.name || ''}
            type="text"
            placeholder="Type something here"
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
*/

/*
    const url = 'https://api.datamuse.com/words?';
    const queryParams = 'rel_jja=';
    
    const getSuggestions = async () => {
        const wordQuery = inputField.value;
        const endpoint = `${url}${queryParams}${wordQuery}`;
        try {
            const response = await fetch(endpoint, {cache: 'no-cache'});
            if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            }
        } catch(error) {
            console.log(error);
        }
    }
*/