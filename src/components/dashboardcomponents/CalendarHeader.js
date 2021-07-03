import React from 'react'
import AddButton from './AddButton'
import * as headerStyles from './header.module.css'

export default function CalendarHeader({ onNext, onBack, dateDisplay, setAddEvent, clickedProp, swaggity }) {
    return (
        <div id="header" className={headerStyles.header}>
            <h2 className={headerStyles.dayDisplay}> {swaggity}</h2>
            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <button onClick={onBack} id="backButton" className={headerStyles.backButton}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <h2 className={headerStyles.monthDisplay}> {dateDisplay}</h2>
                <button onClick={onNext} id="nextButton" className={headerStyles.nextButton}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            <div style={{ display: 'flex' }}>
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="note" />
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="reminder" />
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="goal" />
            </div>
        </div>
    )
}
