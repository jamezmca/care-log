import React, { useState } from 'react'
import Card from './Card'
import * as dayview from './dayview.module.css'


export default function DayView({ clicked, nav, days, eventsForClickedDay, events, setEvents }) {
    const [editDelete, setEditDelete] = useState(false)
    console.log(events)
    function deleteEvent(eventId) {
        setEvents(events.filter(event => event.id !== eventId))
    }
    // default colors palegreen, paleturquoise, thistle
    console.log(eventsForClickedDay)
    let redOrderedEventsForDay = [...eventsForClickedDay.filter(event => event.type === "reminder"), ...eventsForClickedDay.filter(event => event.type === "goal"), ...eventsForClickedDay.filter(event => event.type === "note")]
    //filter events and then add them back together in a new filtered array - reminders first goals second notes third
    return (
        <div className={dayview.container}>
            <div onClick={() => setEditDelete(!editDelete)} className={dayview.editButton}>
                <p>EDIT / DELETE</p>
            </div>
            {redOrderedEventsForDay.map((event, i) => {
                if (redOrderedEventsForDay[i-1]?.type !== event.type) {
                    console.log(redOrderedEventsForDay[i-1]?.type, event.type)
                }
                return <Card key={event.id} event={event} cardType={event.type}  editDelete={editDelete} deleteEvent={deleteEvent}/>
            })}
            {eventsForClickedDay.length === 0 && <p style={{ alignSelf: 'center', marginTop: '20px'}}>No plans for today Ü</p>}
        </div>
    )
}

