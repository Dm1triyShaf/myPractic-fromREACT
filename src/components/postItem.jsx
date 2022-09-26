import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {  
    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{props.post.id}. {props.post.title} </strong> {/*  20 прописиваем Post.id что бы мы видели что страница меняется  */}
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post_btns'>
                <MyButton onClick={() => props.remove(props.post)}>   
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;
