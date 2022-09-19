import React from "react";
import classes from './MyButton.module.css'    /* импортируем css */

const MyButton = ({children, ...props}) => {     /*  оборачиваем в скобки */
    return (
        <button {...props} className={classes.myBtn}>  {/* весь обьект передаем в кнопку {...props}  */}   {/* добавляем класс (мы получаем стиль как свойство обьекта) */}
            {children}            {/* передаем пропсы что бы был текст в кнопке */}

        </button>


    );
};

export default MyButton;