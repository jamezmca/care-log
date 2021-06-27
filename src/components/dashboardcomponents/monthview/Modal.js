import React, { useState } from 'react'
import * as monthView from './monthview.module.css'


const Modal = ({ onSave, onClose, clicked }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [error, setError] = useState(false)
    const dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
    const dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`


    return (
        <>
            <div id="newEventModal" className={monthView.newEventModal}>
                <h2 className={monthView.modalHeader}>{`${dateString}`}</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                    <label htmlFor="eventTitleInput" className={monthView.timeLabel}>Title:</label>
                    <input value={title}
                        onChange={e => setTitle(e.target.value)}
                        id="eventTitleInput"
                        placeholder="Self care activity"
                        className={error ? `${monthView.error} ${monthView.inputTitle}` : `${monthView.inputTitle}`} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                    <label htmlFor="time" className={monthView.timeLabel} >Time:</label>
                    <input type="time"
                        id="time"
                        name="time"
                        className={monthView.time}
                        onChange={e => setTime(e.target.value)} />
                </div>

                <textarea
                    onChange={e => setDescription(e.target.value)}
                    id="eventDescriptionInput"
                    placeholder="description..."
                    value={description}
                    className={monthView.textArea} />

                <div style={{ display: 'flex', width: '100%' }}>
                    <button onClick={() => {
                        if (title) {
                            setError(false)
                            onSave(title, description, time)
                        } else {
                            setError(true)
                        }
                    }} id="saveButton" className={monthView.saveButton}>Add</button>
                    <button onClick={onClose} id="cancelButton" className={monthView.cancelButton}>Cancel</button>
                </div>
                {/* <h1>render out rest of days todo list</h1> */}
            </div>
            <div id="modalBackDrop" className={monthView.modalBackDrop} />
        </>
    )
}

export default Modal