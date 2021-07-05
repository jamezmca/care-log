import React, { useState } from 'react'
import * as modalStyles from './modal.module.css'


export default function RepeatedEventChecklist({ makeRepeatedGoal, setMakeRepeatedGoal }) {
    const [daysOfWeek, setDaysOfWeek] = useState([['Monday', false], ['Tuesday', false], ['Wednesday', false], ['Thursday', false], ['Friday', false], ['Saturday', false], ['Sunday', false],])
    const [numOfRepeatedWeeks, setNumOfRepeatedWeeks] = useState(1)

    return (
        <div style={{ marginBottom: '10px' }}>
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
            <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center'}}>
                <label htmlFor="numOfWeeks">Number of weeks to repeat for:</label>
                <input type="text" name="numOfWeeks" value={numOfRepeatedWeeks} onChange={e => setNumOfRepeatedWeeks(e.target.value)}/>
            </div>

        </div>
    )
}
