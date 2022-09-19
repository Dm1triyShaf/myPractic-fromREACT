import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {  
    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{props.number}. {props.post.title} </strong>  
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post_btns'>
                <MyButton onClick={() => props.remove(props.post)}>   {/* вешаем слушатель события, получаем функцию remuve и как параметр передаем текущий пост */}
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;
