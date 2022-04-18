import React, { useEffect } from "react";

export const SearchContainer = (props) => {
  const { searchTerm, setSearchTerm, setPosts, setTopics, setTopicFilter } = props;

  const url = 'https://www.reddit.com/search.json?q=';

  const apiFetch = async(searchTermOnAPI) => {
    const endpoint = `${url}${searchTermOnAPI}`;
    try {
      const response = await fetch(endpoint);
      if (response.ok) {

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
    setTopicFilter('');
    apiFetch(searchTerm);
  };



  useEffect(() => {

    const apiFetch = async(searchTermOnAPI) => {
      const endpoint = `${url}${searchTermOnAPI}`;
      try {
        const response = await fetch(endpoint);
        if (response.ok) {
  
          const jsonResponse = await response.json();
          const jsonData = jsonResponse.data.children;
          setPosts(jsonData);
          console.log(jsonData);

          
          let tempTopics = [];
          for (let i = 0; i < jsonData.length; i++) {
            let jsonSubreddit = jsonData[i].data.subreddit;
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

    apiFetch('spacex');
    
    console.log('whazaaaaaaaaaa');
  }, [setPosts, setTopics]);
    



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


