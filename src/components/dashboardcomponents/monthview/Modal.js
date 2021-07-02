import React, { useState } from 'react'
import * as monthView from './monthview.module.css'


const Modal = ({ onSave, onClose, clicked, addEvent }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [duration, setDuration] = useState('')
    const [error, setError] = useState(false)
    const dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
    const dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
    let id = Math.floor(Math.random() * 1000000)

    return (
        <>
            <div id="newEventModal" className={monthView.newEventModal}>
                <h2 className={monthView.modalHeader}>{`${dateString}`}</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                    <label htmlFor="eventTitleInput" className={monthView.timeLabel}>Title:</label>
                    <input value={title}
                        onChange={e => setTitle(e.target.value)}
                        id="eventTitleInput"
                        placeholder={`${addEvent[1]} title`}
                        className={error ? `${monthView.error} ${monthView.inputTitle}` : `${monthView.inputTitle}`} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                    <label htmlFor="time" className={monthView.timeLabel} >Time:</label>
                    <input type="time"
                        id="time"
                        name="time"
                        required
                        className={monthView.time}
                        onChange={e => setTime(e.target.value)} />
                </div>
                {/* add a label here */}
                <label htmlFor="time" className={monthView.timeLabel} >Description:</label>
                <textarea
                    onChange={e => setDescription(e.target.value)}
                    id="eventDescriptionInput"
                    placeholder="Add some detail..."
                    value={description}
                    className={monthView.textArea} />

                <div style={{ display: 'flex', width: '100%' }}>
                    <button onClick={() => {
                        if (title && time) {
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