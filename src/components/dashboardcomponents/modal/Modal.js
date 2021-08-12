import React, { useState, useEffect } from 'react'
import * as modalStyles from './modal.module.css'
import Goal from './Goal'
import Note from './Note'
import Reminder from './Reminder'


const Modal = ({ onSave, onClose, clicked, addEvent, editedEvent }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [duration, setDuration] = useState('')
    const [makeRepeatedGoal, setMakeRepeatedGoal] = useState([false, []])
    const [addTimeDetail, setAddTimeDetail] = useState(false)
    const [keySteps, setKeySteps] = useState([false, [] ])
    const [daysOfWeek, setDaysOfWeek] = useState([['Monday', false], ['Tuesday', false], ['Wednesday', false], ['Thursday', false], ['Friday', false], ['Saturday', false], ['Sunday', false],])
    const [numOfRepeatedWeeks, setNumOfRepeatedWeeks] = useState(0)
    const [error, setError] = useState(false)
    const dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
    const dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
    let id = Math.floor(Math.random() * 1000000000)

    useEffect(() => {
        if (editedEvent !== '') {
            setTitle(editedEvent.title)
            setDescription(editedEvent.description)
            setTime(editedEvent.time)
            setDuration(editedEvent.duration)
            setDaysOfWeek(editedEvent.daysOfWeek)
            setAddTimeDetail(editedEvent.addTimeDetail)
            setKeySteps(editedEvent.keySteps)
            setNumOfRepeatedWeeks(editedEvent.numOfRepeatedWeeks)
        }
    }, [editedEvent])
    //if id is given then find and fill out
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
                    keySteps={keySteps}
                    setKeySteps={setKeySteps}
                    makeRepeatedGoal={makeRepeatedGoal}
                    setMakeRepeatedGoal={setMakeRepeatedGoal}
                    daysOfWeek={daysOfWeek}
                    setDaysOfWeek={setDaysOfWeek}
                    numOfRepeatedWeeks={numOfRepeatedWeeks}
                    setNumOfRepeatedWeeks={setNumOfRepeatedWeeks}
                    addTimeDetail={addTimeDetail}
                    setAddTimeDetail={setAddTimeDetail}
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
                    makeRepeatedGoal={makeRepeatedGoal}
                    setMakeRepeatedGoal={setMakeRepeatedGoal}
                    daysOfWeek={daysOfWeek}
                    setDaysOfWeek={setDaysOfWeek}
                    numOfRepeatedWeeks={numOfRepeatedWeeks}
                    setNumOfRepeatedWeeks={setNumOfRepeatedWeeks}
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
                    daysOfWeek={daysOfWeek}
                    setDaysOfWeek={setDaysOfWeek}
                    numOfRepeatedWeeks={numOfRepeatedWeeks}
                    setNumOfRepeatedWeeks={setNumOfRepeatedWeeks}
                />}
                {/* add ability to add another  of any given type and make the modal window scroll view */}


                <div style={{ display: 'flex', width: '100%' }}>
                    <button onClick={() => {
                        if (title) {
                            setError(false)
                            onSave(title, description, time, duration, addEvent[1], daysOfWeek, numOfRepeatedWeeks, keySteps, id )
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

