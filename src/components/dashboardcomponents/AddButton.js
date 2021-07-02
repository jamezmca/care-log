import React from 'react'
import * as headerStyles from './header.module.css'

//styles in header.module.css
//render three different add buttons based on input type and do it all within this file
export default function AddButton({ setAddEvent, clicked, buttonType }) {


    if (buttonType === "note") {
        return (
            <div className={headerStyles.addButton} onClick={() => { if (clicked) return setAddEvent([true, 'note']) }}>
                <h5>Note</h5>
            </div>
        )
    }
      
    if (buttonType === "reminder") {
        return (
            <div className={headerStyles.addButton} onClick={() => { if (clicked) return setAddEvent([true, 'reminder']) }}>
                <h5>Reminder</h5>
            </div>
        )
    }
      
    if (buttonType === "goal") {
        return (
            <div className={headerStyles.addButton} onClick={() => { if (clicked) return setAddEvent([true, 'goal']) }}>
                <h5>Goal</h5>
            </div>
        )
    }
}
