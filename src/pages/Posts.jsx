
import React, { useEffect, useState } from 'react';   
import PostForm from './components/postForm';
import PostList from './components/postList';
import PostFilter from './components/postFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost'; 
import PostServise from './API/postServise';
import Loader from './components/UI/Loader/Loader'; 
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './components/UI/pagination/pagination';


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);    /* 1 создаем состояние в которое будем помещать общее количество постов */
  const [limit, setLimit] = useState(10);  /* 5 создаем состояние для лимита */
  const [page, setPage] = useState(1);   /* 6 состояние для номера страницы */
  const sortedAndSearcedPosts = usePosts(posts, filter.sort, filter.query) 
  
  const [fetchPosts, isPostLoading, postError] = useFetching(async() => {
    const response = await PostServise.getAll(limit,page);  /* 7 передаем эти параметры */
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']  /* 2 обращаемся к хедэрам и достаем x-total-count */
    setTotalPages(getPageCount(totalCount, limit))  /* 9 передаем в функцию общее количество постов */
  })


  useEffect(() => {     
    fetchPosts()
  }, [page])                 


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }

  const changePage = (page) => { /* 18 создаем функцию которая изменяет номер страницы и подгружать новые данные */
    setPage(page)
    
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
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>}
      {isPostLoading 
        ? <div style={{display: "flex", justifyContent:"center", marginTop: 50}}><Loader/></div>  
        : <PostList remove={removePost} posts={sortedAndSearcedPosts} title="посты про Javascript" />  
      }
    
      <Pagination /* 22 добавляем метод  */
      page={page}  /* номер страницы */
      changePage={changePage} /* функция которая этот номер изменяет */
      totalPages={totalPages}/> {/* общее количесво страниц */}
      
    </div> 
  );
}

export default Posts;


