import React, { useState, useEffect } from 'react'
import DayView from './DayView'
import MonthView from './monthview/MonthView'
import { useDate } from './hooks/useDate'
import { findByLabelText } from '@testing-library/dom'

//going to manage my state in here chuurski

export default function DashboardContent() {
    const [nav, setNav] = useState(0)
    const [clicked, setClicked] = useState()
    const [events, setEvents] = useState(
        localStorage.getItem('events') ?
            JSON.parse(localStorage.getItem('events')) :
            []
    )

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

    function eventForDate(date) {
        return events.find(e => e.date === date)
    }

    const { days, dateDisplay } = useDate(events, nav)


    return (
        <div style={{display: 'flex'}}>
            <DayView />
            <MonthView days={days} dateDisplay={dateDisplay} setNav={setNav} nav={nav} setClicked={setClicked} clicked={clicked} setEvents={setEvents} events={events} eventForDate={eventForDate}/>
        </div>
    )
}
