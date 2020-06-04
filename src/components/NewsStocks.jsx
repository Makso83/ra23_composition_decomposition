import React from 'react'
import StockItem from './StcokItem'

//отрисовывает список биржевых котировок

function NewsStocks(props) {
    return (
        <div>
            {props.stocks.map((stock) => {
                return (
                    <StockItem>
                        <>
                            <span><a href={stock.href}>{stock.ticker}: </a></span>
                            <span>{stock.price} </span>
                            <span>{stock.change} </span>
                        </>
                    </StockItem>
                )

            })}
            <span><a href="#">...</a></span>
        </div>
    )
}

export default NewsStocks
