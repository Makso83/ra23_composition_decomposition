import React from 'react'
import NewsBlock from './NewsBlock'
import tass from '../tass.jpg'
import NewsPaginationContainer from './NewsPaginationContainer'
import NewsStockContainer from './NewsStockContainer'

// Компонент принимает от NewsPaginationContainer через колбэк выбор раздела новостей, отправляет соответствующий AJAX на сервер
// и передает полученный массив заголовков в <NewsBlock />


// условный ответ от сервера
const newsHeadersData = [
    {id: 1, newsSourceLogo: tass, headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', href: '#'},
    {id: 2, newsSourceLogo: tass, headline: 'Fusce ac malesuada quam.', href: '#'},
    {id: 3, newsSourceLogo: tass, headline: 'Donec ultrices dui eget sem lacinia, et varius enim varius.', href: '#'},
    {id: 4, newsSourceLogo: tass, headline: 'Pellentesque sapien augue, pretium id bibendum nec, scelerisque id eros', href: '#'},
    {id: 5, newsSourceLogo: tass, headline: 'Phasellus egestas aliquam orci, eu mollis leo gravida eu.', href: '#'}
]

function NewsBlockContainer() {
    return (
        <div>
            <NewsPaginationContainer />
            <NewsBlock newsHeadersData={newsHeadersData}/>
            <NewsStockContainer />
        </div>
    )
}

export default NewsBlockContainer
