import React, { useState } from 'react'
import * as monthView from './monthview.module.css'


const Modal = ({ onSave, onClose }) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    
    return (
        <>
            <div id="newEventModal" className={monthView.newEventModal}>
                <h2>New Event</h2>
                <input value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Event Title" 
                    className={error ? `${monthView.error}` : ''}/>
                <button onClick={() => {
                    if (title) {
                        setError(false)
                        onSave(title)
                    } else {
                        setError(true)
                    }
                }} id="saveButton" className={monthView.saveButton}>Save</button>
                <button onClick={onClose} id="cancelButton" className={monthView.cancelButton}>Cancel</button>
            </div>
            <div id="modalBackDrop"  className={monthView.modalBackDrop}/>
        </>
    )
}

export default Modal