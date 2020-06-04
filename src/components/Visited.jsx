import React from 'react'

//Рендерит содержимое блока Visited, полученное с сервера

function Visited() {
    return (
        <ul>
            <li><a href="#"><span style={{fontWeight: "bold"}}>Недвижимость - </span> о сталинках</a> </li>
            <li><a href="#"><span style={{fontWeight: "bold"}}>Маркет - </span> люстры и светильники</a> </li>
            <li><a href="#"><span style={{fontWeight: "bold"}}>Авто.ру - </span> привод 4х4 до 500 000</a> </li>
        </ul>
    )
}

export default Visited
