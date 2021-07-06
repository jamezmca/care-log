import React from 'react'
import GoalAdditionals from './GoalAdditionals'
import * as modalStyles from './modal.module.css'
// add date completed by, how long until you want to complete it, particalar days of the week, duration, 
// make if accomidate smart goals
// add in addable key actions or steps below the description and maybe make the description a touch smaller


export default function Goal({
    title,
    setTitle,
    addEvent,
    setTime,
    description,
    setDescription,
    error,
    duration,
    setDuration,
    keySteps,
    setKeySteps,
    addTimeDetail,
    setAddTimeDetail,
    makeRepeatedGoal,
    setMakeRepeatedGoal,
    numOfRepeatedWeeks,
    setNumOfRepeatedWeeks,
    daysOfWeek,
    setDaysOfWeek,
 }) {
    return (
        // make width 100% if u need
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                <label htmlFor="eventTitleInput" className={modalStyles.timeLabel}>Title:</label>
                <input value={title}
                    onChange={e => setTitle(e.target.value)}
                    id="eventTitleInput"
                    placeholder={`${addEvent[1]} title`}
                    className={error ? `${modalStyles.error} ${modalStyles.inputTitle}` : `${modalStyles.inputTitle}`} />
            </div>

            <label htmlFor="eventDescriptionInput" className={modalStyles.timeLabel} >Description:</label>
            <textarea
                onChange={e => setDescription(e.target.value)}
                id="eventDescriptionInput"
                placeholder="add some detail..."
                value={description}
                className={modalStyles.textArea} />
            <GoalAdditionals
                makeRepeatedGoal={makeRepeatedGoal}
                setMakeRepeatedGoal={setMakeRepeatedGoal}
                daysOfWeek={daysOfWeek}
                setDaysOfWeek={setDaysOfWeek}
                numOfRepeatedWeeks={numOfRepeatedWeeks}
                setNumOfRepeatedWeeks={setNumOfRepeatedWeeks}
                addTimeDetail={addTimeDetail}
                setAddTimeDetail={setAddTimeDetail}
                keySteps={keySteps}
                setKeySteps={setKeySteps}
 
            />


        </div>
    )
}
