import React from 'react'

const paginationItem = [
    {name: 'Видео', href: '#'},
    {name: 'Картинки', href: '#'},
    {name: 'Новости', href: '#'},
    {name: 'Карты', href: '#'},
    {name: 'Маркет', href: '#'},
    {name: 'Переводчик', href: '#'},
    {name: 'Эфир', href: '#'},
    {name: 'еще', href: '#'}
]

function SearchPagination() {
    return (
        <div>
            {paginationItem.map((item) => 
                <a href={item.href}> {item.name} </a>
            )}
            
        </div>
    )
}

export default SearchPagination
