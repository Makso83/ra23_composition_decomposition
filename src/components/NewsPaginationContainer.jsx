import React from 'react'
import NewsPagination from './NewsPagination'


//Компонент, определяющий меню выбора новостных разделов. Передает меню вниз в пропсах,
//получает результат выбора пункта меню и возвращает его родительскому компоненту

const newsMenu = [
    {name: 'Сегодня в СМИ', href:'#'},
    {name: 'в Германии', href: '#'},
    {name: 'Рекомендуем', href: '#'}
]



function NewsPaginationContainer() {
    return (
        <div>
            <NewsPagination newsMenu={newsMenu} />
        </div>
    )
}

export default NewsPaginationContainer
