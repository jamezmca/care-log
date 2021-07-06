import React, { useState } from 'react'
import * as modalStyles from './modal.module.css'
import RepeatedEventChecklist from './RepeatedEventChecklist'


export default function Reminder({
    title,
    setTitle,
    addEvent,
    setTime,
    description,
    setDescription,
    error,
    duration,
    setDuration,
    makeRepeatedGoal,
    setMakeRepeatedGoal,
    numOfRepeatedWeeks,
    setNumOfRepeatedWeeks,
    daysOfWeek,
    setDaysOfWeek
}) {
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

             <RepeatedEventChecklist
                makeRepeatedGoal={makeRepeatedGoal}
                setMakeRepeatedGoal={setMakeRepeatedGoal}
                daysOfWeek={daysOfWeek}
                setDaysOfWeek={setDaysOfWeek}
                numOfRepeatedWeeks={numOfRepeatedWeeks}
                setNumOfRepeatedWeeks={setNumOfRepeatedWeeks}
                reminderDescription={reminderDescription}
                setReminderDescription={setReminderDescription}
                description={description}
                setDescription={setDescription} />


        </>
    )
}
