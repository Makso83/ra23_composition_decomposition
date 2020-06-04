import React from 'react'
import banner from '../banner.jpg'

//Компонент получает с сервера рекламный блок и отрисовывает его

function PromoBlock() {
    return (
        <div>
            <a href='#'><img className='PromoBlock__image' src={banner} /></a>
        </div>
    )
}

export default PromoBlock
