import React from 'react'
import Day from './Day'
import Modal from '../modal/Modal'
import * as monthView from './monthview.module.css'

export default function MonthView({ days, setClicked, clicked, setEvents, events, addEvent, setAddEvent, clickedProp, dayView, setEditedEvent, editedEvent }) {
    const boxShadows = ['#97BC62FF']
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
    if (!dayView) return (
        <>
            <div id="container" className={monthView.container}>
                <div id="weekdays" className={monthView.weekdays}>
                    <div>Sunday</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                </div>

                <div id="calendar" className={monthView.calendar}>
                    {days.map((d, index) => {
                        return <Day
                            shadow={boxShadows[0]}
                            day={d}
                            key={index}
                            onClick={() => {
                                if (d.value !== 'padding') {
                                    setClicked(d.date)
                                }
                            }}
                            isClickedDay={clicked === d.date ? 'isClickedDay' : null} />

                    })}
                </div>

            </div>
            {addEvent[0] &&
                <Modal
                    editedEvent={editedEvent}
                    onClose={() => {
                        setAddEvent([false, ''])
                        setEditedEvent('')
                    }}
                    onSave={(title, description, time, duration, type, daysOfWeek, numOfRepeatedWeeks, keySteps, id) => {
                        let tempStateArr = [{ title, description, date: clicked, time, id, type, duration, daysOfWeek, numOfRepeatedWeeks, keySteps }]

                        if (numOfRepeatedWeeks !== 0) {
                            let tempDaysArr = daysOfWeek.filter(day => day[1])

                            for (let j = 0; j < tempDaysArr.length; j++) {
                                let nextRepeatedDate = new Date(parseInt(clicked.split('/')[2]), parseInt(clicked.split('/')[0]) - 1, parseInt(clicked.split('/')[1]) + 1)
                                let dayForFunction = tempDaysArr[j][0]

                                for (let i = 0; i < numOfRepeatedWeeks * 7; i++) {
                                    if (dayForFunction.slice(0, 3) === nextRepeatedDate.toString().split(' ')[0]) {
                                        tempStateArr.push({ title, description, date: `${months.indexOf(nextRepeatedDate.toString().split(' ')[1]) + 1}/${nextRepeatedDate.toString().split(' ')[2].indexOf(0) === 0 ? nextRepeatedDate.toString().split(' ')[2].split(0)[1] : nextRepeatedDate.toString().split(' ')[2]}/${nextRepeatedDate.toString().split(' ')[3]}`, time, id, type, duration, daysOfWeek, numOfRepeatedWeeks, keySteps })
                                    }
                                    nextRepeatedDate.setDate(nextRepeatedDate.getDate() + 1);
                                }
                            }
                        }
                        setEvents([...events.filter(event => event.id !== editedEvent.id), ...tempStateArr])
                        setEditedEvent('')
                        setAddEvent([false, ''])
                        setClicked(null)
                    }}
                    onDelete={() => {
                        setEvents(events.filter(e => e.date !== clicked))
                        setClicked(null)
                    }}
                    clicked={clicked}
                    setAddEvent={setAddEvent}
                    addEvent={addEvent}
                />
            }
        </>
    )

    return (
        <>
            {addEvent[0] &&
                <Modal
                    editedEvent={editedEvent}
                    onClose={() => {
                        setAddEvent([false, ''])
                    }}
                    onSave={(title, description, time, duration, type, daysOfWeek, numOfRepeatedWeeks, keySteps, id) => {
                        let tempStateArr = [{ title, description, date: clicked, time, id, type, duration, daysOfWeek, numOfRepeatedWeeks, keySteps }]

                        if (numOfRepeatedWeeks !== 0) {
                            let tempDaysArr = daysOfWeek.filter(day => day[1])

                            for (let j = 0; j < tempDaysArr.length; j++) {
                                let nextRepeatedDate = new Date(parseInt(clicked.split('/')[2]), parseInt(clicked.split('/')[0]) - 1, parseInt(clicked.split('/')[1]))
                                nextRepeatedDate.setDate(nextRepeatedDate.getDate() + 1);

                                let dayForFunction = tempDaysArr[j][0]

                                for (let i = 0; i < numOfRepeatedWeeks * 7; i++) {
                                    if (dayForFunction.slice(0, 3) === nextRepeatedDate.toString().split(' ')[0]) {
                                        tempStateArr.push({ title, description, date: `${months.indexOf(nextRepeatedDate.toString().split(' ')[1]) + 1}/${nextRepeatedDate.toString().split(' ')[2].indexOf(0) === 0 ? nextRepeatedDate.toString().split(' ')[2].split(0)[1] : nextRepeatedDate.toString().split(' ')[2]}/${nextRepeatedDate.toString().split(' ')[3]}`, time, id, type, duration, daysOfWeek, numOfRepeatedWeeks, keySteps })
                                    }
                                    nextRepeatedDate.setDate(nextRepeatedDate.getDate() + 1);
                                }
                            }
                        }
                        setEvents([...events.filter(event => event.id !== editedEvent.id), ...tempStateArr])
                        setEditedEvent('')
                        setAddEvent([false, ''])
                        setClicked(null)
                    }}
                    onDelete={() => {
                        setEvents(events.filter(e => e.date !== clicked))
                        setClicked(null)
                    }}
                    clicked={clicked}
                    setAddEvent={setAddEvent}
                    addEvent={addEvent}
                />
            }
        </>
    )
}
