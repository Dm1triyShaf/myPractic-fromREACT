import React from 'react';
import classes from './MyInput.module.css'    /* импортируем css */


const MyInput = React.forwardRef((props,ref) => {    /* прописываем команду forvardRef и принимаем ссылку ref */
    return (
        
        <input ref = {ref} className={classes.myInput} {...props}/>   /* в компоненте указываем куда ссылка ref должна попадать */
    );
});


export default MyInput;