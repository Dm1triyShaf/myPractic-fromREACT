import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {     /* вызываем созданную функцию */
    const [post, setPost] = useState({ title: '', body: '' })    /* делаем состояние post, добавляем */

    const addNewPost = (e) => {     /* создаем эту функцию */
    e.preventDefault()          /* вызываем функцию preventDefault, которая предотвращает дефолтное поведение браузера */
    const newPost = {
        ...post, id:Date.now()
    }

    create(newPost)    /* делаем диструктиризацию пропров */
    setPost({ title: '', body: '' })   
  }
    
    return ( 


             <form>
        {/* УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
        <MyInput

          value={post.title}    /* Связываем валью инпута с состонием title достаем его из поста */
          onChange={e => setPost({ ...post, title: e.target.value })}    /* добавляем функцию onChange что бы видеть как пользователь что-то вводит. Далее вызывем функцию setPost и передаем туда оьтект */
          type="text"
          placeholder='Название поста' />

        {/* НЕУПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
        <MyInput
          value={post.body}    /* Связываем валью инпута с состонием title достаем его из поста   */
          onChange={e => setPost({ ...post, body: e.target.value })}     /* добавляем функцию onChange что бы видеть как пользователь что-то вводит */
          type="text"
          placeholder='Описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>      {/* вешаем слушатель события на кнопку и при нажатии добавляем фугкцию */}
      </form>
    )
}


export default PostForm;