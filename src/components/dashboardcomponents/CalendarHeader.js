import React from 'react'
import AddButton from './AddButton'
import * as headerStyles from './header.module.css'

export default function CalendarHeader({ onNext, onBack, onNextDay, onBackDay, dateDisplay, setAddEvent, clickedProp, swaggity, width, dayView }) {

    if (width > 800) return (
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

    if (dayView) return (
        <div id="header" className={headerStyles.header}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start' }}>
                <button onClick={onBackDay} id="backButton" className={headerStyles.backButton}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <h2 className={headerStyles.dayDisplay}> {swaggity}</h2>
                <button onClick={onNextDay} id="nextButton" className={headerStyles.nextButton}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div style={{ display: 'flex', alignSelf: 'center' }}>
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="note" />
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="reminder" />
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="goal" />
            </div>
        </div>
    )

    if (!dayView) return (
        <div id="header" className={headerStyles.header}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start' }}>
                <button onClick={onBack} id="backButton" className={headerStyles.backButton}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <h2 className={headerStyles.monthDisplay} style={{ textAlign: 'left', marginLeft: '5px' }}> {dateDisplay}</h2>
                <button onClick={onNext} id="nextButton" className={headerStyles.nextButton}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div style={{ display: 'flex', alignSelf: 'center', marginBottom: '4px' }}>
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="note" />
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="reminder" />
                <AddButton setAddEvent={setAddEvent} clicked={clickedProp} buttonType="goal" />
            </div>
        </div>
    )
}
