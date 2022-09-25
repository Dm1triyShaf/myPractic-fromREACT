import React, { useEffect, useState } from 'react';   
import PostForm from './components/postForm';
import PostList from './components/postList';
import './styles/App.css';
import PostFilter from './components/postFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost';
import axios from 'axios' 
import PostServise from './API/postServise';


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearcedPosts = usePosts(posts, filter.sort, filter.query)   


  useEffect(() => {      /*1 пишем функцию, первым параметром некоторый колбек, вторым массив зависимостей */
    fetchPosts()
  }, [])                 /* оставляем ее пустым что бы функция отработала 1 раз */


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {   
    const posts = await PostServise.getAll();
    setPosts(posts)
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }


  return (
    <div className="App">
      
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearcedPosts} title="посты про Javascript" />
    </div> 
  );
}

export default App;



