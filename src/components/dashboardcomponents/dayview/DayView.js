import React, { useState, useEffect } from 'react'
import * as dayview from './dayview.module.css'


export default function DayView({ clicked, nav }) {
    console.log(nav)
    const [currentMonth, setCurrentMonth] = useState()
    const [swaggity, setSwaggity] = useState()
    const currentDate = new Date()
    const consoleDate = `${`${currentDate}`.split(' ', 3)[0]} ${`${currentDate}`.split(' ', 3)[2]} ${`${currentDate}`.split(' ', 3)[1]}`

    useEffect(() => {
        setSwaggity(consoleDate)

        if (clicked !== undefined && nav === 0) {
            let dateForModal = new Date(clicked.split('/')[2], clicked.split('/')[0] - 1, clicked.split('/')[1])
            let dateString = `${dateForModal.toDateString().split(' ', 3)[0]} ${dateForModal.toDateString().split(' ', 3)[2]} ${dateForModal.toDateString().split(' ', 3)[1]}`
            setSwaggity(dateString)
        }

    }, [clicked, nav])


    let dayHours = []
    for (let i = 0; i < 24; i++) {
        `${i}`.length === 1 ? dayHours.push(`0${i}:00`) : dayHours.push(`${i}:00`)
    }

    return (
        <div className={dayview.container}>
            <h2>{swaggity}</h2>
        </div>
    )
}
