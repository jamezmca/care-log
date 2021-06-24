import React from 'react'
import * as headerStyles from './header.module.css'

//styles in header.module.css

export default function AddButton({setAddEvent, clicked}) {
    return (
        <div className={headerStyles.addButton} onClick={() => {if(clicked) return setAddEvent(true)}}>
            <h1>+</h1>
        </div>
    )
}
