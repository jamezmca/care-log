import React, { useState, useEffect } from 'react'
import DayView from './dayview/DayView'
import MonthView from './monthview/MonthView'
import { useDate } from './hooks/useDate'
import AddButton from './AddButton'

export default function DashboardContent() {
    const [nav, setNav] = useState(0)
    const [clicked, setClicked] = useState()
    const [eventsForClickedDay, setEventsForClickedDay] = useState([])
    const [addEvent, setAddEvent] = useState(false)
    const [events, setEvents] = useState(
        localStorage.getItem('events') ?
            JSON.parse(localStorage.getItem('events')) :
            []
    )

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

    function eventsForDate(date) {
        return events.reduce((acc, event) => {
            if (event.date === date) return [...acc, event]
            return acc
        }, [])
    }

    const { days, dateDisplay, currentDateString } = useDate(events, nav)
    let clickedProp = clicked ? clicked : currentDateString

    useEffect(() => {
        //if nav isn't = to changed month - clicked month, then don't update state
        // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        // let james = clickedProp.split('/')[0]
        // let james2 = months.indexOf(dateDisplay.split(' ')[0]) + 1
        // let totalJames = james - james2
        // let clickedYearDiff = clickedProp.split('/')[2] - currentDateString.split('/')[2]
        //&& Math.abs(clickedYearDiff) > Math.abs(Math.floor(nav / 12))
        let totalJames = days.find(day => day.date === clickedProp)
        console.log(totalJames)
        if (days.length > 0 && totalJames !== undefined) {
            setEventsForClickedDay(() => days.find(day => day.date === clickedProp).event)
        }
    }, [days, clickedProp, dateDisplay])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                    setAddEvent={setAddEvent} />
            </div>
            <AddButton setAddEvent={setAddEvent} clicked={clickedProp} />
        </div>
    )
}


    // function dayHasEvents(day) {
    //     let newArr = []
    //     if (!day) return newArr.push(false)
    //     if (day.event.length === 0) return newArr.push(false)
    //     newArr.push(true)
    //     newArr.push(day.event.map(e => [e.date, e.description, e.time, e.title]))
    //     return newArr
    // }


    // function eventForDate(date) {
    //     return events.find(e => e.date === date)
    // }