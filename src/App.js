import React, { useState, useEffect } from "react";
import './App.css';
import { SearchContainer } from './containers/SearchContainer';
import { PostsContainer } from './containers/PostsContainer';
import { TopicsContainer } from './containers/TopicsContainer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topicFilter, setTopicFilter] = useState('');
  const [postsFiltered, setPostsFiltered] = useState([]);


  useEffect(() => {
    console.log('useEffect triggered');

    const filterPostsByTopic = () => {
      const fiteredPosts = posts.filter(post => {
          return post.data.subreddit === topicFilter;
      });
      return fiteredPosts
    }

    setPostsFiltered(filterPostsByTopic());

  }, [topicFilter]);

  return (
    <div className="App">
      <header>
        <SearchContainer 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setPosts={setPosts}
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
          topicFilter={topicFilter}
          postsFiltered={postsFiltered}
        />
      </main>
    </div>
  );
}

export default App;
