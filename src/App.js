import React, {  useMemo, useState } from 'react';  
import PostForm from './components/postForm';
import PostList from './components/postList';
import './styles/App.css';
import PostFilter from './components/postFilter';
import MyModal from './components/UI/myModal/MyModal';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ffdf', body: 'fdw' },
    { id: 2, title: 'awewe 2', body: 'Description' },
    { id: 3, title: 'cxvb 3', body: 'yjy' },

  ])


 const [filter,setFilter] = useState({sort:'',query:''})


  const sortedPosts = useMemo( () => {  
    if(filter.sort) {
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort])) 
    }
      return posts;
    }, [filter.sort, posts])

  const sortedAndSearcedPosts = useMemo(() =>{  
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query)) 
  },[filter.query,sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }



  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }


  return (
    <div className="App">
      <MyModal>
  dsdsfsqwq
      </MyModal>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}/> 
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
        />
         <PostList remove={removePost} posts={sortedAndSearcedPosts} title="посты про Javascript" />   
    </div>
  );
}

export default App;



