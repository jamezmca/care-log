import React, { useState, useEffect } from 'react'
import DayView from './dayview/DayView'
import MonthView from './monthview/MonthView'
import { useDate } from './hooks/useDate'
import AddButton from './AddButton'

//going to manage my state in here chuurski

export default function DashboardContent() {
    const [nav, setNav] = useState(0)
    const [clicked, setClicked] = useState()
    const [addEvent, setAddEvent] = useState(false)
    const [events, setEvents] = useState(
        localStorage.getItem('events') ?
            JSON.parse(localStorage.getItem('events')) :
            []
    )

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

    // function eventForDate(date) {
    //     return events.find(e => e.date === date)
    // }

    function eventsForDate(date) {
        return events.reduce((acc, event) => {
            if (event.date === date) return [...acc, event]
            return acc
        }, [])
    }

    const { days, dateDisplay } = useDate(events, nav)


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <DayView                     
                    days={days}
                    clicked={clicked}
                    nav={nav}
                />
                <MonthView
                    days={days}
                    dateDisplay={dateDisplay}
                    setNav={setNav}
                    nav={nav}
                    setClicked={setClicked}
                    clicked={clicked}
                    setEvents={setEvents}
                    events={events}
                    // eventForDate={eventForDate}
                    eventsForDate={eventsForDate}
                    addEvent={addEvent}
                    setAddEvent={setAddEvent} />
            </div>
            <AddButton setAddEvent={setAddEvent} clicked={clicked}/>
        </div>
    )
}
