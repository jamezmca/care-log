import React from 'react'
import * as modalStyles from './modal.module.css'


export default function RepeatedEventChecklist({
    makeRepeatedGoal,
    setMakeRepeatedGoal,
    numOfRepeatedWeeks,
    setNumOfRepeatedWeeks,
    daysOfWeek,
    setDaysOfWeek,
    reminderDescription,
    setReminderDescription,
    description,
    setDescription

}) {

    return (
        <>
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

            {makeRepeatedGoal[0] && <div style={{ marginBottom: '10px' }}>
                {daysOfWeek.map((day, key) => {
                    return <div className={modalStyles.repeatedReminderDay} key={key} onClick={() => {
                        let tempArr = [...daysOfWeek]
                        daysOfWeek.find(dayOfWeek => dayOfWeek[0] === day[0])[1] = !daysOfWeek.find(dayOfWeek => dayOfWeek[0] === day[0])[1]
                        setDaysOfWeek(tempArr)
                    }}>
                        <div className={day[1] ? modalStyles.boxSelected : modalStyles.boxUnselected}></div>
                        <p className={day[1] ? modalStyles.daySelected : modalStyles.dayUnselected}>{day[0]}</p>
                    </div>
                })}
                <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
                    <label htmlFor="numOfWeeks">Number of weeks to repeat for:</label>
                    <input type="text" name="numOfWeeks" value={numOfRepeatedWeeks} onChange={e => setNumOfRepeatedWeeks(e.target.value)} />
                </div>

            </div>}
        </>
    )
}
