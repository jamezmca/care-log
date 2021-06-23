import React from 'react'
import * as monthView from './monthview.module.css'

export default function CalendarHeader({ onNext, onBack, dateDisplay }) {
    return (
        <div id="header" className={monthView.header}>
            <div id="monthDisplay" className={monthView.monthDisplay}><h2>{dateDisplay}</h2></div>
            <div>
                <button onClick={onBack} id="backButton" className={monthView.backButton}>Back</button>
                <button onClick={onNext} id="nextButton" className={monthView.nextButton}>Next</button>
            </div>
        </div>
    )
}
