import React from "react";
import { getPagesArray } from "../../../utils/pages";


const Pagination = ({totalPages, page,changePage}) => { /*21 получаем в пропсах номер текущей страницы и массив на основании которого отрисовываем элементы */
    let pagesArray = getPagesArray(totalPages)  /* 13 вызываем эту функцию  и передаем состояние totalPages */
    return (
        <div className="page_wrapper">
        {pagesArray.map(p =>   /*15 создаем кнопки на основании массива pagesArray с помощью фунции map итэрируемся */
          <span
            onClick={() => changePage(p)} /* 18 вешаем слугатель события и изменяем состояние changePage  */
            key={p} className={page === p ? "page page_current" : "page"}>  {/* 16 создаем ситили для пагинации */}
           {/* 17 делаем условие, если элемент итерации функции map равно номеру текущей страницы то довавляем одни стили, 
           а если не равняется то другие
           добавялем ключь, его получаем по номеру страницы {p} */}
              {p}  
            </span>
          )}
    </div>
    )
}

export default Pagination;