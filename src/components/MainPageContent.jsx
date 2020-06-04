import React from 'react'
import NewsBlockContainer from './NewsBlockContainer'
import SideBarContainer from './SideBarContainer'
import SearchWidgetContainer from './SearchWidgetContainer'
import ContentWidgetContainer from './ContentWidgetContainer'
import PromoBlock from './PromoBlock'


//Компонент отвечающий за отрисовку основных компонент страницы. Задает грид.

function MainPageContent() {
    return (
        <div className='MainPageContent__grid'>
            <div className='NewsBlock__grid' ><NewsBlockContainer /></div>
            <div className='SideBar__grid'><SideBarContainer /></div>
            <div className='SearchWidget__grid'><SearchWidgetContainer /></div>
            <div className='ContentWidget__grid'><ContentWidgetContainer /></div>
            <div className='PromoWidget__grid'><PromoBlock /></div>
            
        </div>
    )
}

export default MainPageContent
