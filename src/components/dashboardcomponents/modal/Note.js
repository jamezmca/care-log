import React from 'react'
import * as modalStyles from './modal.module.css'


export default function Note({title, setTitle, addEvent, setTime, description, setDescription, error, duration, setDuration}) {
    return (
        <>
            <label htmlFor="eventDescriptionInput" className={modalStyles.timeLabel} >Notes:</label>
            <textarea
                onChange={e => setTitle(e.target.value)}
                id="eventDescriptionInput"
                placeholder="Add some notes for the day..."
                value={title}
                className={error ? `${modalStyles.error} ${modalStyles.textAreaNote}` : `${modalStyles.textAreaNote}`} />
        </>
    )
}
