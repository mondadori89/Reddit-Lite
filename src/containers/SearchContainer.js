import React, { useState } from "react";

export const SearchContainer = (props) => {
  const { searchTerm, setSearchTerm, posts, setPosts } = props;

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
    const checkContact = obj => obj.name === profile.name;
    if (contact.some(checkContact)) {
      alert('This contact is already on your list...');
      return;
    }
    setContact((prev) => { return [profile, ...prev]; })
    setProfile({});*/
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