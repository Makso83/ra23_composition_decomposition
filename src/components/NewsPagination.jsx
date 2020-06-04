import React from 'react'


// Отрисовка меню выбора раздела новостей, возврат выбора через колбэк родителю
function NewsPagination(props) {
    return (
        <>
            {props.newsMenu.map((newsItem) => {
                return <span><a href='#'> {newsItem.name} </a></span>
            }
            )}
        </>
    )
}

export default NewsPagination
