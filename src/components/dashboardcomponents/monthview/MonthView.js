import React from 'react'
import CalendarHeader from './CalendarHeader'
import Day from './Day'

export default function MonthView({dateDisplay, setNav, nav, days, setClicked}) {
    return (
        <>
            <div id="container">
                <CalendarHeader
                    dateDisplay={dateDisplay}
                    onNext={() => setNav(nav + 1)}
                    onBack={() => setNav(nav - 1)} />

                <div id="weekdays">
                    <div>Sunday</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                </div>

                <div id="calendar">
                    {days.map((d, index) => (
                        <Day
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
            {/* {
                clicked && !eventForDate(clicked) &&
                <Modal
                    onClose={() => setClicked(null)}
                    onSave={title => {
                        setEvents([...events, { title, date: clicked }])
                        setClicked(null)
                    }}
                    eventText={eventForDate(clicked) ? eventForDate(clicked).title : null}
                    onDelete={() => {
                        setEvents(events.filter(e => e.date !== clicked))
                        setClicked(null)
                    }} />
            } */}
        </>
    )
}
