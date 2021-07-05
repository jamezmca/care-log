import React, { useState } from 'react'
import * as modalStyles from './modal.module.css'
import Goal from './Goal'
import Note from './Note'
import Reminder from './Reminder'


const Modal = ({ onSave, onClose, clicked, addEvent }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [duration, setDuration] = useState('')
    const [makeRepeatedGoal, setMakeRepeatedGoal] = useState([false, []])
    const [keySteps, setKeySteps] = useState([])
    const [error, setError] = useState(false)
    const dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
    const dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
    let id = Math.floor(Math.random() * 1000000)

    return (
        <>
            <div id="newEventModal" className={modalStyles.newEventModal}>
                <h2 className={modalStyles.modalHeader}>{`${dateString}`}</h2>

                {addEvent[1] === 'goal' && <Goal
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    duration={duration}
                    setDuration={setDuration}
                    time={time}
                    setTime={setTime}
                    addEvent={addEvent}
                    error={error}
                />}

                {addEvent[1] === 'note' && <Note
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    duration={duration}
                    setDuration={setDuration}
                    time={time}
                    setTime={setTime}
                    addEvent={addEvent}
                    error={error}
                />}

                {addEvent[1] === 'reminder' && <Reminder
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    duration={duration}
                    setDuration={setDuration}
                    time={time}
                    setTime={setTime}
                    addEvent={addEvent}
                    error={error}
                    makeRepeatedGoal={makeRepeatedGoal}
                    setMakeRepeatedGoal={setMakeRepeatedGoal}
                />}
                {/* add ability to add another  of any given type and make the modal window scroll view */}


                <div style={{ display: 'flex', width: '100%' }}>
                    <button onClick={() => {
                        if (title) {
                            setError(false)
                            onSave(title, description, time)
                        } else {
                            setError(true)
                        }
                    }} id="saveButton" className={modalStyles.saveButton}>Add</button>
                    <button onClick={onClose} id="cancelButton" className={modalStyles.cancelButton}>Cancel</button>
                </div>
                {/* <h1>render out rest of days todo list</h1> */}
            </div>
            <div id="modalBackDrop" className={modalStyles.modalBackDrop} />
        </>
    )
}

export default Modal

