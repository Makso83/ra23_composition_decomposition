import React from 'react'

// Рендерит переданные от родительского компонента пропсыЖ заголовок и контент, 
// который в свою очередь может быть компонентом

function ContentBlock(props) {
    return (
        <div>
            <a href="#"><h4>{props.title}</h4></a>
            {props.content}
        </div>
    )
}

export default ContentBlock
