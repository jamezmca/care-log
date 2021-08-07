import React, { useState, useEffect } from 'react'
import DayView from './dayview/DayView'
import MonthView from './monthview/MonthView'
import { useDate } from './hooks/useDate'
import useWindowDimensions, { windowDimensions } from './hooks/useWindowDimensions'
import CalendarHeader from './CalendarHeader'

export default function DashboardContent() {
    const [nav, setNav] = useState(0)
    const [clicked, setClicked] = useState()
    const [eventsForClickedDay, setEventsForClickedDay] = useState([])
    const [addEvent, setAddEvent] = useState([false, '']) //false and type
    const [swaggity, setSwaggity] = useState()
    const [dayView, setDayView] = useState(false)
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

    let { width } = useWindowDimensions()

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

    if (width > 800) return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CalendarHeader
                width={width}
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
                    setEvents={setEvents}
                    events={events}
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

    let tabHighlight = dayView ? '0 0 5px #ADEFD1FF' : '0 0 5px #00203FFF'
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop: '-5px' }}>
            <div style={{ display: 'flex', textAlign: 'center', cursor: 'pointer' }}>
                <div onClick={() => {
                    if (dayView) return
                    setDayView(!dayView)
                }} style={{ flex: 1, backgroundColor: '#00203FFF', color: '#ADEFD1FF', fontSize: '20px', letterSpacing: '2px', fontWeight: 600, textShadow: tabHighlight }}>Day</div>
                <div onClick={() => {
                    if (!dayView) return
                    setDayView(!dayView)
                }} style={{ flex: 1, backgroundColor: '#ADEFD1FF', color: '#00203FFF', fontSize: '20px', letterSpacing: '2px', fontWeight: 600, textShadow: tabHighlight }}>Month</div>
            </div>
            <CalendarHeader
                width={width}
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
                swaggity={swaggity}
                dayView={dayView} />
            {!dayView && <MonthView
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
                clickedProp={clickedProp} />}
            {dayView && <div style={{alignSelf: 'center'}}><DayView
                days={days}
                clicked={clicked}
                nav={nav}
                eventsForClickedDay={eventsForClickedDay}
                setEvents={setEvents}
                events={events}
            /> </div>}

        </div >

    )
}


