import React from 'react'
import NewsItem from './NewsItem';


//отвечает за отрисовку компонент новостного блока

function NewsBlock(props) {
    const newsHeaders = props.newsHeadersData;
    return (
        <>
            {newsHeaders.map((item) => {
                return (
                    <>
                        <NewsItem>
                            <span><img src={item.newsSourceLogo} alt='agency-logo' /></span>
                            <a href={item.href}>{item.headline}</a>
                        </NewsItem>
                    </>
                )

            })}

        </>
    )
}

export default NewsBlock
