import React from 'react'
import AddButton from './AddButton'
import * as monthView from './monthview/monthview.module.css'

export default function CalendarHeader({ onNext, onBack, dateDisplay, setAddEvent, clickedProp, swaggity }) {
    return (
        <div id="header" className={monthView.header}>
            <h2 className={monthView.monthDisplay}> {swaggity}</h2>
            <h2 className={monthView.monthDisplay}> {dateDisplay}</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                <button onClick={onBack} id="backButton" className={monthView.backButton}>Back</button>
                <button onClick={onNext} id="nextButton" className={monthView.nextButton}>Next</button>
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="addButton" />
            </div>
        </div>
    )
}
