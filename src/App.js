import React, { useState } from "react";
import './App.css';
import { SearchContainer } from './containers/SearchContainer';
import { PostsContainer } from './containers/PostsContainer';
import { TopicsContainer } from './containers/TopicsContainer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topicFilter, setTopicFilter] = useState('');

  const setPostsFiltered = (topic) => {

  }

  return (
    <div className="App">
      <header>
        <SearchContainer 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          posts={posts}
          setPosts={setPosts}
          topics={topics}
          setTopics={setTopics}
        />
      </header>
      <main>
        <TopicsContainer 
          topics={topics}
          setTopicFilter={setTopicFilter}
        />
        <PostsContainer 
          posts={posts}
        />
      </main>
    </div>
  );
}

export default App;
