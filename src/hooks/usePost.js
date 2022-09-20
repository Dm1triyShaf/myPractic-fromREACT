/* хуки всегда начинаются с use */

import { useMemo } from "react";




export const useSortedPosts = (posts, sort) => {    /* 1 создаем хук функцию которая принимает посты и метод сортировки */

    const sortedPosts = useMemo(() => {      /* 2 переносим sortedPosts с App.js */
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;   /* 3 возвращаем отсортированный массив */
}

export const usePosts = (post, sort, query) => {   /* 4 создаем хук который будет возвращать отфильтрованный и отсортированный массив. Аргументами он принимает посты, метод сортировки и поисковую строку */
    
    const sortedPosts = useSortedPosts(post, sort)  /* 6 передаем созданный хук в котором передаем посты и метод сортировки */
    
    const sortedAndSearcedPosts = useMemo(() => {   /* 5 переносим логику по фильтрации из App.js */
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearcedPosts; /* 7 возвращаем отсортированный и отфильтрованный массив */
}