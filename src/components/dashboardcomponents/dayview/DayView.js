import React, { useState } from 'react'
import Card from './Card'
import * as dayview from './dayview.module.css'


export default function DayView({ clicked, nav, days, eventsForClickedDay, events, setEvents }) {
    const [editDelete, setEditDelete] = useState(false)

    function deleteEvent(eventId) {
        setEvents(events.filter(event => event.id !== eventId))
    }
    function orderByTime(eventArray) {
        if (eventArray.find(e => e === undefined)) return
        let eventsSortedByTime = [...eventArray]

        for (let i = 0; i < eventArray.length; i++) {
            for (let j = 0; j < eventArray.length; j++) {
                if (eventsSortedByTime[j]?.time > eventsSortedByTime[j + 1]?.time) {
                    let tmp = eventsSortedByTime[j];
                    eventsSortedByTime[j] = eventsSortedByTime[j + 1];
                    eventsSortedByTime[j + 1] = tmp;
                }
                if (eventsSortedByTime[j]?.time === "" && eventsSortedByTime[j + 1] !== undefined) {
                    let tmp = eventsSortedByTime[j];
                    eventsSortedByTime[j] = eventsSortedByTime[j + 1];
                    eventsSortedByTime[j + 1] = tmp;
                }
            }
        }
        return eventsSortedByTime
    }
    // console.log([...orderByTime(eventsForClickedDay.filter(event => event.type === "reminder")), ...orderByTime(eventsForClickedDay.filter(event => event.type === "goal"))])

    // default colors palegreen, paleturquoise, thistle
    let redOrderedEventsForDay = [...orderByTime(eventsForClickedDay.filter(event => event.type === "reminder")), ...orderByTime(eventsForClickedDay.filter(event => event.type === "goal")), ...orderByTime(eventsForClickedDay.filter(event => event.type === "note"))]
    let editDeleteButtonStyle = !editDelete ? 'darkslateblue' : 'slateblue'
    //filter events and then add them back together in a new filtered array - reminders first goals second notes third
    return (
        <div className={dayview.container}>
            <div onClick={() => setEditDelete(!editDelete)} className={dayview.editButton} style={{ backgroundColor: editDeleteButtonStyle }}>
                <p>EDIT / DELETE</p>
            </div>
            {redOrderedEventsForDay.map((event, i) => {
                if (redOrderedEventsForDay[i - 1]?.type !== event.type) {
                    return (
                        <div key={event.id}>
                            <p style={{ textAlign: 'center', opacity: 0.5, }}>--- {event.type.toUpperCase()}S ---</p>
                            <Card event={event} cardType={event.type} editDelete={editDelete} deleteEvent={deleteEvent} id={event.id} />
                        </div>
                    )
                }
                return <Card key={event.id} event={event} cardType={event.type} editDelete={editDelete} deleteEvent={deleteEvent} id={event.id}/>
            })}
            {eventsForClickedDay.length === 0 && <p style={{ alignSelf: 'center', marginTop: '20px' }}>No plans for today Ü</p>}
        </div>
    )
}

