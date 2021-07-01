import React, { useState, useEffect } from 'react'
import DayView from './dayview/DayView'
import MonthView from './monthview/MonthView'
import { useDate } from './hooks/useDate'
import AddButton from './AddButton'
import CalendarHeader from './CalendarHeader'

export default function DashboardContent() {
    const [nav, setNav] = useState(0)
    const [clicked, setClicked] = useState()
    const [hourSelected, setHourSelected] = useState('')
    const [eventsForClickedDay, setEventsForClickedDay] = useState([])
    const [addEvent, setAddEvent] = useState(false)
    const [swaggity, setSwaggity] = useState()
    const [events, setEvents] = useState(
        localStorage.getItem('events') ?
            JSON.parse(localStorage.getItem('events')) :
            []
    )

    const { days, dateDisplay, currentDateString } = useDate(events, nav)
    const currentDate = new Date()
    const consoleDate = `${`${currentDate}`.split(' ', 3)[0]} ${`${currentDate}`.split(' ', 3)[2]} ${`${currentDate}`.split(' ', 3)[1]}`
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

    useEffect(() => {
        setSwaggity(consoleDate)
        if (clicked !== undefined && clicked !== null) {
            let dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
            let dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
            setSwaggity(dateString)
        }
    }, [clicked, nav, consoleDate, days])

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
                swaggity={swaggity}/>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                <DayView
                    days={days}
                    clicked={clicked}
                    nav={nav}
                    eventsForClickedDay={eventsForClickedDay}
                    hourSelected={hourSelected}
                    setHourSelected={setHourSelected}
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
                    hourSelected={hourSelected}
                    clickedProp={clickedProp} />
            </div>
            {/* add the add button next to the next and back buttons  */}
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