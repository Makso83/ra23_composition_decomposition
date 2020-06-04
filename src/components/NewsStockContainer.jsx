import React from 'react'
import NewsStocks from './NewsStocks'

// Отправляет AJAX запрос на биржевые котировки и пробрасывает их в пропсах в <NewsStocks />

const stocks = [
    {ticker: 'USD', price: '69,05', change: '+0,38', href: '#'},
    {ticker: 'EUR', price: '77,81', change: '+0,65', href: '#'},
    {ticker: 'НЕФТЬ', price: '39,72', change: '+0,84%', href: '#'}
]

function NewsStockContainer() {
    return (
        <div>
            <NewsStocks stocks={stocks}/>
        </div>
    )
}

export default NewsStockContainer


// USD 69,05 +0,38 EUR 77,81 +0,65 НЕФТЬ 39,72 +0,84%