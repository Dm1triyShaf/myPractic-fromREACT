import React from "react";
import cl from "./Loader.module.css";   /* 1 импортируем css */

const loader = () => {
    return (
        <div className={cl.loader}>   {/* 2 указывем класс */}

        </div>
    )
}

export default loader;
