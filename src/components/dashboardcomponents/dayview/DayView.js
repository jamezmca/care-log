import React from 'react'
import Card from './Card'
import * as dayview from './dayview.module.css'


export default function DayView({ clicked, nav, days, eventsForClickedDay, hourSelected, setHourSelected }) {
    // default colors palegreen, paleturquoise, thistle
    console.log(eventsForClickedDay)
    let redOrderedEventsForDay = [eventsForClickedDay.filter(event => event.type === "reminder"), eventsForClickedDay.filter(event => event.type === "goal"), eventsForClickedDay.filter(event => event.type === "note"),]
    //filter events and then add them back together in a new filtered array - reminders first goals second notes third

    return (
        <div className={dayview.container}>
            {eventsForClickedDay.map((event) => {
                return <Card key={event.id} event={event} cardType={event.type}/>
            })}
        </div>
    )
}

