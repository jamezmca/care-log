import React, { useState, useEffect } from 'react'
import * as dayview from './dayview.module.css'
import Hour from './Hour'


export default function DayView({ clicked, nav, days }) {
    const [swaggity, setSwaggity] = useState()
    const [daysEvents, setDaysEvents] = useState([])
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const currentDate = new Date()
    const consoleDate = `${`${currentDate}`.split(' ', 3)[0]} ${`${currentDate}`.split(' ', 3)[2]} ${`${currentDate}`.split(' ', 3)[1]}`
    // let monthNumber = days.length > 0 ? console.log('works') : false
    // //fix above
    // let monthCheck = consoleDate.indexOf(months[monthNumber])

    // console.log(dayHasEvents(days?.find(day => day.isCurrentDay)))
    useEffect(() => {
        setSwaggity(consoleDate)
        if (clicked !== undefined && clicked !== null) {
            let dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
            let dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
            setSwaggity(dateString)
        }
    }, [clicked, nav, consoleDate])

    let dayHours = []
    for (let i = 0; i < 24; i++) {
        `${i}`.length === 1 ? dayHours.push(`0${i}:00`) : dayHours.push(`${i}:00`)
    }

    function dayHasEvents(day) {
        let newArr = []
        if (!day) return newArr.push(false)
        if (day.event.length === 0) return newArr.push(false)
        newArr.push(true)
        newArr.push(day.event.map(e => [e.date, e.description, e.time, e.title]))
        return newArr
    }

    return (
        <div className={dayview.container}>
            <h2 style={{ color: '#b66cd3', padding: 0, margin: 0 }}>{swaggity}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
                {dayHours.map(e => <Hour clicked={clicked} days={days} hour={e} key={e} />)}
            </div>
        </div>
    )
}
