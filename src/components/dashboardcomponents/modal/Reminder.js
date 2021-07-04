import React, { useState } from 'react'
import * as modalStyles from './modal.module.css'
import RepeatedEventChecklist from './RepeatedEventChecklist'


export default function Reminder({ title, setTitle, addEvent, setTime, description, setDescription, error, duration, setDuration, makeRepeatedGoal, setMakeRepeatedGoal }) {
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
            <div style={{ display: 'flex' }}>
                <div className={modalStyles.addMoreInfo} onClick={() => setReminderDescription(!reminderDescription)}>
                    <p>{!reminderDescription ? "Add a" : "Remove"} description</p>
                </div>
                <div className={modalStyles.addMoreInfo} onClick={() => setMakeRepeatedGoal([!makeRepeatedGoal[0], []])}>
                    <p>{!makeRepeatedGoal[0] ? "Repeat this reminder" : "Do not repeat"}</p>
                </div>
            </div>

            {reminderDescription &&
                <textarea
                    onChange={e => setDescription(e.target.value)}
                    id="eventDescriptionInput"
                    placeholder="Description..."
                    value={description}
                    className={modalStyles.textAreaReminder} />


            }
            {makeRepeatedGoal[0] && <RepeatedEventChecklist makeRepeatedGoal={makeRepeatedGoal} setMakeRepeatedGoal={setMakeRepeatedGoal}/>}


            {/* <h1>render out rest of days todo list</h1> */}
        </>
    )
}
