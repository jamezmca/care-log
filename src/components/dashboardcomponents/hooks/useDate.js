
import { useEffect, useState } from 'react'

export const useDate = (events, nav) => {
    const [dateDisplay, setDateDisplay] = useState('')
    const [days, setDays] = useState([])
    const currentDate = new Date()
    const currentDateString = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`


    useEffect(() => {
        // function eventForDate(date) {
        //     return events.find(e => e.date === date)
        // }

        function eventsForDate(date) {
            return events.reduce((acc, event) => {
                if (event.date === date) return [...acc, event]
                return acc
            }, [])
        }

        const dt = new Date()
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        if (nav !== 0) {
            dt.setMonth(new Date().getMonth() + nav)
        }

        const day = dt.getDate()
        const month = dt.getMonth()
        const year = dt.getFullYear()

        const firstDayOfMonth = new Date(year, month, 1)
        const daysInMonth = new Date(year, month + 1, 0).getDate()

        const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })

        setDateDisplay(`${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`)
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0])

        const daysArr = [];

        for (let i = 1; i <= paddingDays + daysInMonth; i++) {
            const dayString = `${month + 1}/${i - paddingDays}/${year}`

            if (i > paddingDays) {
                // let dayNameFinder = dayString.getDate()
                // console.log(dayString.split('/')[1])
                // console.log(new Date(year, month, dayString.split('/')[1]))
                let dayOfTheWeekVar = `${new Date(year, month, dayString.split('/')[1])}`
                let dayOfTheWeekVar2 = dayOfTheWeekVar.split(' ')[0]
                daysArr.push({
                    value: i - paddingDays,
                    event: eventsForDate(dayString),
                    isCurrentDay: i - paddingDays === day && nav === 0,
                    date: dayString,
                    dayOfTheWeek: dayOfTheWeekVar2
                })
            } else {
                daysArr.push({
                    value: 'padding',
                    event: null,
                    isCurrentDay: false,
                    date: ''
                })
            }
        }
        setDays(daysArr)
    }, [events, nav])

    return {
        days,
        dateDisplay,
        currentDateString
    }
}