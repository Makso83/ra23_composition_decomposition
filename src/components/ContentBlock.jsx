import React from "react";

// Рендерит переданные от родительского компонента пропсы: заголовок и контент,
// который в свою очередь может быть компонентом

function ContentBlock(props) {
    return (
        <div>
            <a href="#">
                <h4>{props.title}</h4>
            </a>
            {props.children}
        </div>
    );
}

export default ContentBlock;
