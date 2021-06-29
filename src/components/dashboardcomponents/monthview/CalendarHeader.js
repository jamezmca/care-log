import React from 'react'
import AddButton from '../AddButton'
import * as monthView from './monthview.module.css'

export default function CalendarHeader({ onNext, onBack, dateDisplay, setAddEvent, clickedProp }) {
    return (
        <div id="header" className={monthView.header}>
            <div id="monthDisplay" className={monthView.monthDisplay}><h2>{dateDisplay}</h2></div>
            <div style={{display: 'flex'}}>
                <button onClick={onBack} id="backButton" className={monthView.backButton}>Back</button>
                <button onClick={onNext} id="nextButton" className={monthView.nextButton}>Next</button>
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} />
            </div>
        </div>
    )
}
