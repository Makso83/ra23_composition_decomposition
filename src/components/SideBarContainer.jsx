import React from 'react'
import logo from '../logo.jpg'

//Компонент делает запрос за содержимым и отрисовывает

function SideBarContainer() {
    return (
        <div>
          <img src={logo} />
          <a href="#"><h4>Курсы повышения квалификации</h4></a> 
          <p>Записывайтесь и повышайте</p>
        </div>
    )
}

export default SideBarContainer
