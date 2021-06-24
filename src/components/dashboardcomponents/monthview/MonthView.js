import React from 'react'
import CalendarHeader from './CalendarHeader'
import Day from './Day'
import Modal from './Modal'
import * as monthView from './monthview.module.css'


export default function MonthView({ dateDisplay, setNav, nav, days, setClicked, clicked, setEvents, events, eventForDate }) {
    const boxShadow = ['2a9d8f', 'e9c46a', 'd8e2dc', 'a8dadc', 'caf0f8', '48cae4', '03045e', 'ffc8dd', 'cdb4db', 'ccd5ae', '94d2bd', 'd9ed92', 'f72585', 'b5179e', '480ca8', 'f3722c', '43aa8b', '6930c3', '80ffdb', '72efdd', 'fee440', 'f15bb5', 'ff4d6d', 'e2afff', 'c8e7ff', 'c0fdff', 'e5b3fe', 'ffd60a', '89b0ae', 'bee3db', '84a98c', 'd55d92', '822faf', 'ff7900', 'ffff3f', '55a630', 'eeef20', '80ed99', 'ffdd00', 'f0efeb', 'adc178', 'ffa6c1', 'b8f2e6', '16db93']
    const boxShadows = boxShadow.reduce((acc, e) => {
        return [...acc, `#${e}`]
    }, [])

    return (
        <>
            <div id="container" className={monthView.container}>
                <CalendarHeader
                    dateDisplay={dateDisplay}
                    onNext={() => setNav(nav + 1)}
                    onBack={() => setNav(nav - 1)} />

                <div id="weekdays" className={monthView.weekdays}>
                    <div>Sunday</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                </div>

                <div id="calendar" className={monthView.calendar}>
                    {days.map((d, index) => (
                        <Day
                            shadow={boxShadows[Math.floor(Math.random() * boxShadows.length)]}
                            day={d}
                            key={index}
                            onClick={() => {
                                if (d.value !== 'padding') {
                                    setClicked(d.date)
                                }
                            }} />

                    ))}
                </div>

            </div>
            {
                clicked && !eventForDate(clicked) &&
                <Modal
                    onClose={() => setClicked(null)}
                    onSave={(title, description, time) => {
                        setEvents([...events, { title, description, date: clicked, time }])
                        setClicked(null)
                    }}
                    eventText={eventForDate(clicked) ? eventForDate(clicked).title : null}
                    onDelete={() => {
                        setEvents(events.filter(e => e.date !== clicked))
                        setClicked(null)
                    }} 
                    clicked={clicked}/>
            }
        </>
    )
}
