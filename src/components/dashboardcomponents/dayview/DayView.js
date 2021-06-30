import React, { useState, useEffect } from 'react'
import * as dayview from './dayview.module.css'


export default function DayView({ clicked, nav, days, eventsForClickedDay, hourSelected, setHourSelected }) {
    const [swaggity, setSwaggity] = useState()
    const currentDate = new Date()
    const consoleDate = `${`${currentDate}`.split(' ', 3)[0]} ${`${currentDate}`.split(' ', 3)[2]} ${`${currentDate}`.split(' ', 3)[1]}`

    useEffect(() => {
        setSwaggity(consoleDate)
        if (clicked !== undefined && clicked !== null) {
            let dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
            let dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
            setSwaggity(dateString)
        }
    }, [clicked, nav, consoleDate, days])

    return (
        <div className={dayview.container}>
            <h2>{swaggity}</h2>

        </div>
    )
}
