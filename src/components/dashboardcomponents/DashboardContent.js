import React, { useState, useEffect } from 'react'
import DayView from './dayview/DayView'
import MonthView from './monthview/MonthView'
import { useDate } from './hooks/useDate'
import useWindowDimensions from './hooks/useWindowDimensions'
import CalendarHeader from './CalendarHeader'
import { database } from '../../firebase'

export default function DashboardContent({ user }) {
    const [nav, setNav] = useState(0)
    const [clicked, setClicked] = useState()
    const [eventsForClickedDay, setEventsForClickedDay] = useState([])
    const [addEvent, setAddEvent] = useState([false, '']) //false and type
    const [swaggity, setSwaggity] = useState()
    const [dayView, setDayView] = useState(false)
    const [events, setEvents] = useState([])
    const [editedEvent, setEditedEvent] = useState('')

    useEffect(() => {
        database.ref().child("users").child(user.userId).get().then((snapshot) => {
            if (snapshot.exists() && snapshot.val()?.events) {
                setEvents(JSON.parse(snapshot.val().events))
            } else {
                setEvents(localStorage.getItem('events') ?
                    JSON.parse(localStorage.getItem('events')) :
                    [])
            }
        }).catch((error) => {
            console.error(error)
        })
    }, [user.userId])
    // localStorage.getItem('events') ?
    // JSON.parse(localStorage.getItem('events')) :
    // []

    console.log(addEvent, editedEvent)

    const { days, dateDisplay, currentDateString } = useDate(events, nav)
    let clickedProp = clicked ? clicked : currentDateString
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]

    function writeUserData(userId, email, events) {
        database.ref('users/' + userId).set({
            id: userId,
            email: email,
            events: [events]
        })
    }

    useEffect(() => {
        if (events.length !== 0) {
            localStorage.setItem('events', JSON.stringify(events))
            writeUserData(user.userId, user.email, JSON.stringify(events))
        }
    }, [events, user.email, user.userId])

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

    useEffect(() => {

        if (width >= 800) setDayView(false)
    }, [width])

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
                    setAddEvent={setAddEvent}
                    setEditedEvent={setEditedEvent}
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
                    clickedProp={clickedProp}
                    setEditedEvent={setEditedEvent}
                    editedEvent={editedEvent} />
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
                onNextDay={() => {
                    let nextRepeatedDate = new Date(parseInt(clickedProp.split('/')[2]), parseInt(clickedProp.split('/')[0]) - 1, parseInt(clickedProp.split('/')[1]))
                    nextRepeatedDate.setDate(nextRepeatedDate.getDate() + 1);
                    setClicked(`${months.indexOf(nextRepeatedDate.toString().split(' ')[1]) + 1}/${nextRepeatedDate.toString().split(' ')[2].indexOf(0) === 0 ? nextRepeatedDate.toString().split(' ')[2].split(0)[1] : nextRepeatedDate.toString().split(' ')[2]}/${nextRepeatedDate.toString().split(' ')[3]}`)

                }}
                onBackDay={() => {
                    let nextRepeatedDate = new Date(parseInt(clickedProp.split('/')[2]), parseInt(clickedProp.split('/')[0]) - 1, parseInt(clickedProp.split('/')[1]))
                    nextRepeatedDate.setDate(nextRepeatedDate.getDate() - 1);
                    setClicked(`${months.indexOf(nextRepeatedDate.toString().split(' ')[1]) + 1}/${nextRepeatedDate.toString().split(' ')[2].indexOf(0) === 0 ? nextRepeatedDate.toString().split(' ')[2].split(0)[1] : nextRepeatedDate.toString().split(' ')[2]}/${nextRepeatedDate.toString().split(' ')[3]}`)
                }}
                setAddEvent={setAddEvent}
                clickedProp={clickedProp}
                swaggity={swaggity}
                dayView={dayView} />
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
                setEditedEvent={setEditedEvent}
                editedEvent={editedEvent}
                clickedProp={clickedProp}
                dayView={dayView} />

            {dayView && <div style={{ alignSelf: 'center' }}><DayView
                days={days}
                clicked={clicked}
                nav={nav}
                eventsForClickedDay={eventsForClickedDay}
                setEvents={setEvents}
                events={events}
                setAddEvent={setAddEvent}
                setEditedEvent={setEditedEvent}
                editedEvent={editedEvent}
            /> </div>}

        </div >

    )
}


