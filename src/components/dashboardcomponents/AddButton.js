import React from 'react'
import * as headerStyles from './header.module.css'

//styles in header.module.css
//render three different add buttons based on input type and do it all within this file
export default function AddButton({ setAddEvent, clicked, buttonType }) {


    if (buttonType === "addButton") {
        return (
            <div className={headerStyles.addButton} onClick={() => { if (clicked) return setAddEvent(true) }}>
                <h1>Note</h1>
            </div>
        )
    }
      
    if (buttonType === "Reminder") {
        return (
            <div className={headerStyles.addButton} onClick={() => { if (clicked) return setAddEvent(true) }}>
                <h1>Reminder</h1>
            </div>
        )
    }
      
    if (buttonType === "goal") {
        return (
            <div className={headerStyles.addButton} onClick={() => { if (clicked) return setAddEvent(true) }}>
                <h1>Goal</h1>
            </div>
        )
    }
}
