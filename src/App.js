import React, { useState } from "react";
import './App.css';
import { SearchContainer } from './containers/SearchContainer';
import { PostsContainer } from './containers/PostsContainer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <header>
        <SearchContainer 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          posts={posts}
          setPosts={setPosts}
        />
      </header>
      <main className="App-header">
        <PostsContainer 
          posts={posts}
        />
      </main>
    </div>
  );
}

export default App;
