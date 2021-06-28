import React, { useState, useEffect, useRef } from 'react'
import * as dayview from './dayview.module.css'
import Hour from './Hour'


export default function DayView({ clicked, nav, days, eventsForClickedDay }) {
    const [swaggity, setSwaggity] = useState()
    const elRef = useRef()
    const currentDate = new Date()
    const consoleDate = `${`${currentDate}`.split(' ', 3)[0]} ${`${currentDate}`.split(' ', 3)[2]} ${`${currentDate}`.split(' ', 3)[1]}`
    // console.log(eventsForClickedDay)

    useEffect(() => {
        setSwaggity(consoleDate)
        if (clicked !== undefined && clicked !== null) {
            let dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
            let dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
            setSwaggity(dateString)
        }
        elRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [clicked, nav, consoleDate, days])



    let dayHours = []
    for (let i = 0; i < 24; i++) {
        `${i}`.length === 1 ? dayHours.push(`0${i}:00`) : dayHours.push(`${i}:00`)
    }

    function hourFilter(dayEvents, currentHour) {
        let hourEvents = dayEvents.filter(e => e.time.split(':')[0] === currentHour.split(':')[0])
        // e ? e.time.split(':')[0] === currentHour.split(':')[0] : false
        return hourEvents
    }
    return (
        <div className={dayview.container}>
            <h2 style={{ color: '#b66cd3', padding: 0, margin: 0, marginBottom: '20px' }}>{swaggity}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
                {dayHours.map(e => {
                    if (e === '08:00') {
                        return <div key={e} ref={elRef}><Hour clicked={clicked} days={days} hour={e} eventsForClickedDay={hourFilter(eventsForClickedDay, e)} /></div>
                    }
                    return <Hour clicked={clicked} days={days} hour={e} key={e} eventsForClickedDay={hourFilter(eventsForClickedDay, e)} />
                })}
            </div>
        </div>
    )
}
