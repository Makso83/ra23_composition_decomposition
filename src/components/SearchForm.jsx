import React from 'react'

// Отправлет на сервер запрос с поисковой фразой после события submit

function SearchForm() {
    return (
        <div>
            <form>
                <input id="search-input" type="textarea" />
                <input type="submit" value="Найти"/>
                <p>Найдется все. Например: <span>фазы луны сегодня</span></p>
            </form>
            
        </div>
    )
}

export default SearchForm
