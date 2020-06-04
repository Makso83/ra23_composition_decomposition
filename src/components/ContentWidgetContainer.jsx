import React from 'react'
import ContentBlock from './ContentBlock'
import WeatherWidget from './WeatherWidget'
import TVWidget from './TVWidget'
import Visited from './Visited'

// Рендерит список контентных блоков, в качестве пропсов передает заголовок и содержимое
function ContentWidgetContainer() {
    return (
        <div className="ContentWidgetContainer__grid">
            <ContentBlock title='Погода' content={<WeatherWidget />} />

            <ContentBlock title='Карта Германии' content='Расписания' />

            <ContentBlock title='Эфир' content={<TVWidget />} />

            <ContentBlock title='Посещаемое' content={<Visited />} />

            <ContentBlock title='Телепрограмма' content={<TVWidget />} />

        </div>
    )
}

export default ContentWidgetContainer
