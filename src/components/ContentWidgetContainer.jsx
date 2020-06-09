import React from "react";
import ContentBlock from "./ContentBlock";
import WeatherWidget from "./WeatherWidget";
import TVWidget from "./TVWidget";
import Visited from "./Visited";

// Рендерит список контентных блоков, в качестве пропсов передает заголовок и содержимое
function ContentWidgetContainer() {
    return (
        <div className="ContentWidgetContainer__grid">
            <ContentBlock title="Погода">
                <WeatherWidget />
            </ContentBlock>

            <ContentBlock title="Карта Германии">
                <a href="#">Расписания</a>
            </ContentBlock>

            <ContentBlock title="Эфир">
                <TVWidget />
            </ContentBlock>

            <ContentBlock title="Посещаемое">
                <Visited />
            </ContentBlock>

            <ContentBlock title="Телепрограмма">
                <TVWidget />
            </ContentBlock>
        </div>
    );
}

export default ContentWidgetContainer;
