import React from 'react'
import * as headerStyles from './header.module.css'

//styles in header.module.css
//render three different add buttons based on input type and do it all within this file
export default function AddButton({ setAddEvent, clicked, buttonType }) {
    if (buttonType === "addButton") {
        return (
            <div className={headerStyles.addButton} onClick={() => { if (clicked) return setAddEvent(true) }}>
                <h1>+</h1>
            </div>
        )
    }
}
