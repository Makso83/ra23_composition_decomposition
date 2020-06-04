import React from 'react'

// Рендерит новостную строчку

function NewsItem(props) {
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}

export default NewsItem
