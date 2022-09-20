/* руководсво по созданию анимаций есть на http://reactcommunity.org/react-transition-group/transition-group */

import React from "react";
import PostItem from "./postItem"
import { CSSTransition, TransitionGroup } from "react-transition-group"; /* импортируем */

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдены
            </h1>
        )
    }



    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition   /* 1 заворачиваем PostItem в этот компонент */
                        key={post.id}   /*2 переносим ключ в корневом эл. списка */
                        timeout={500}
                        classNames="post"  /*3 указываем классовое имя что бы можно было использовать в css */
                    >
                        <PostItem remove={remove} number={index + 1} post={post}  />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;

