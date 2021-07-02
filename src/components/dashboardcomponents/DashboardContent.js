import React, { useState, useEffect } from 'react'
import DayView from './dayview/DayView'
import MonthView from './monthview/MonthView'
import { useDate } from './hooks/useDate'
import CalendarHeader from './CalendarHeader'

export default function DashboardContent() {
    const [nav, setNav] = useState(0)
    const [clicked, setClicked] = useState()
    const [eventsForClickedDay, setEventsForClickedDay] = useState([])
    const [addEvent, setAddEvent] = useState([false, '']) //false and type
    const [swaggity, setSwaggity] = useState()
    const [events, setEvents] = useState(
        localStorage.getItem('events') ?
            JSON.parse(localStorage.getItem('events')) :
            []
    )

    const { days, dateDisplay, currentDateString } = useDate(events, nav)
    let clickedProp = clicked ? clicked : currentDateString

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

    useEffect(() => {
        let totalJames = days.find(day => day.date === clickedProp)
        if (days.length > 0 && totalJames !== undefined) {
            setEventsForClickedDay(() => days.find(day => day.date === clickedProp).event)
        }
    }, [days, clickedProp, dateDisplay])


    // i think i can change this so it just uses clicked prop
    useEffect(() => {
        let dateForModal = new Date(clickedProp.split('/')[2], clickedProp.split('/')[0] - 1, clickedProp.split('/')[1])
        let dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
        setSwaggity(dateString)
    }, [clickedProp, nav, days])

    function eventsForDate(date) {
        return events.reduce((acc, event) => {
            if (event.date === date) return [...acc, event]
            return acc
        }, [])
    }

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CalendarHeader
                dateDisplay={dateDisplay}
                onNext={() => {
                    setNav(nav + 1)
                    // setClicked(null)
                }}
                onBack={() => {
                    setNav(nav - 1)
                    // setClicked(null)
                }}
                setAddEvent={setAddEvent}
                clickedProp={clickedProp}
                swaggity={swaggity} />
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                <DayView
                    days={days}
                    clicked={clicked}
                    nav={nav}
                    eventsForClickedDay={eventsForClickedDay}
                />
                <MonthView
                    days={days}
                    dateDisplay={dateDisplay}
                    setNav={setNav}
                    nav={nav}
                    setClicked={setClicked}
                    clicked={clickedProp}
                    setEvents={setEvents}
                    events={events}
                    // eventForDate={eventForDate}
                    eventsForDate={eventsForDate}
                    addEvent={addEvent}
                    setAddEvent={setAddEvent}
                    clickedProp={clickedProp} />
            </div>
            {/* add the add button next to the next and back buttons  */}
        </div>
    )
}


