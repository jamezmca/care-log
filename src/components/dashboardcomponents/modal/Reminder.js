import React, { useState } from 'react'
import * as modalStyles from './modal.module.css'


export default function Reminder({ title, setTitle, addEvent, setTime, description, setDescription, error, duration, setDuration }) {
    const [reminderDescription, setReminderDescription] = useState(false)
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                <label htmlFor="eventTitleInput" className={modalStyles.timeLabel}>Title:</label>
                <input value={title}
                    onChange={e => setTitle(e.target.value)}
                    id="eventTitleInput"
                    placeholder={`${addEvent[1]} title`}
                    className={error ? `${modalStyles.error} ${modalStyles.inputTitle}` : `${modalStyles.inputTitle}`} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                <div style={{ flex: 1, paddingRight: '30px' }}>
                    <label htmlFor="time" className={modalStyles.timeLabel} >Time:</label>
                    <input type="time"
                        id="time"
                        name="time"
                        required
                        className={modalStyles.time}
                        onChange={e => setTime(e.target.value)} />
                </div>
                <div style={{ flex: 1 }}>
                    <label htmlFor="duration" className={modalStyles.durationLabel} >Duration:</label>
                    <input type="text"
                        id="duration"
                        name="duration"
                        placeholder="hrs"
                        className={modalStyles.duration}
                        onChange={e => setDuration(e.target.value)} />
                </div>
            </div>

            {reminderDescription && <>
                <label htmlFor="eventDescriptionInput" className={modalStyles.timeLabel} >Description:</label>
                <textarea
                    onChange={e => setDescription(e.target.value)}
                    id="eventDescriptionInput"
                    placeholder="add some detail..."
                    value={description}
                    className={modalStyles.textArea} />

                    {/* add in repeat functionality */}
            </>}


            {/* <h1>render out rest of days todo list</h1> */}
        </>
    )
}
