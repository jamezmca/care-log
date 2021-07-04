import React from 'react'
import * as modalStyles from './modal.module.css'


export default function RepeatedEventChecklist({ makeRepeatedGoal, setMakeRepeatedGoal }) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',]

    function handleToggle({ target }) {

    }

    return (
        <div>
            {daysOfWeek.map((day, key) => {
               return <input
                    type="checkbox"
                    onChange={handleToggle}
                    key={key}
                    name={day}
                    checked={makeRepeatedGoal[1].find(goalDay => goalDay === day)}
                />
            })}
        </div>
    )
}
