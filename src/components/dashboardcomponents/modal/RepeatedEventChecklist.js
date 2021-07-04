import React, { useState } from 'react'
import * as modalStyles from './modal.module.css'


export default function RepeatedEventChecklist({ makeRepeatedGoal, setMakeRepeatedGoal }) {
    const [daysOfWeek, setDaysOfWeek] = useState([['Monday', false], ['Tuesday', false], ['Wednesday', false], ['Thursday', false], ['Friday', false], ['Saturday', false], ['Sunday', false],])

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
        </div>
    )
}
