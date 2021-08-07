import React from 'react'
import Day from './Day'
import Modal from '../modal/Modal'
import * as monthView from './monthview.module.css'
//the logic works i just need to make it so that the state rerenders every set events

export default function MonthView({ days, setClicked, clicked, setEvents, events, addEvent, setAddEvent, clickedProp }) {
    // const boxShadow = ['2a9d8f', 'e9c46a', 'd8e2dc', 'a8dadc', 'caf0f8', '48cae4', '03045e', 'ffc8dd', 'cdb4db', 'ccd5ae', '94d2bd', 'd9ed92', 'f72585', 'b5179e', '480ca8', 'f3722c', '43aa8b', '6930c3', '80ffdb', '72efdd', 'fee440', 'f15bb5', 'ff4d6d', 'e2afff', 'c8e7ff', 'c0fdff', 'e5b3fe', 'ffd60a', '89b0ae', 'bee3db', '84a98c', 'd55d92', '822faf', 'ff7900', 'ffff3f', '55a630', 'eeef20', '80ed99', 'ffdd00', 'f0efeb', 'adc178', 'ffa6c1', 'b8f2e6', '16db93']
    // const boxShadows = boxShadow.reduce((acc, e) => {
    //     return [...acc, `#${e}`]
    // }, [])
    const boxShadows = ['#97BC62FF']
    let daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]

    // console.log(days)

    return (
        <>
            <div id="container" className={monthView.container}>
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
                    {days.map((d, index) => {
                        return <Day
                            shadow={boxShadows[0]}
                            day={d}
                            key={index}
                            onClick={() => {
                                if (d.value !== 'padding') {
                                    setClicked(d.date)
                                }
                            }}
                            isClickedDay={clicked === d.date ? 'isClickedDay' : null} />

                    })}
                </div>

            </div>
            {
                addEvent[0] &&
                // !eventForDate(clicked) &&
                <Modal
                    onClose={() => {
                        setAddEvent([false, ''])
                        // setClicked(null)
                    }}
                    onSave={(title, description, time, duration, type, daysOfWeek, numOfRepeatedWeeks, keySteps, id) => {
                        let tempStateArr = [{ title, description, date: clicked, time, id, type, duration, daysOfWeek, numOfRepeatedWeeks, keySteps }]

                        if (numOfRepeatedWeeks !== 0) {
                            let tempDaysArr = daysOfWeek.filter(day => day[1])

                            for (let j = 0; j < tempDaysArr.length; j++) {
                                let nextRepeatedDate = new Date(parseInt(clicked.split('/')[2]), parseInt(clicked.split('/')[0]) - 1, parseInt(clicked.split('/')[1]) + 1)
                                let dayForFunction = tempDaysArr[j][0]

                                for (let i = 0; i < numOfRepeatedWeeks * 7; i++) {
                                    if (dayForFunction.slice(0, 3) === nextRepeatedDate.toString().split(' ')[0]) {
                                        tempStateArr.push({ title, description, date: `${months.indexOf(nextRepeatedDate.toString().split(' ')[1]) + 1}/${nextRepeatedDate.toString().split(' ')[2].indexOf(0) === 0 ? nextRepeatedDate.toString().split(' ')[2].split(0)[1] : nextRepeatedDate.toString().split(' ')[2]}/${nextRepeatedDate.toString().split(' ')[3]}`, time, id, type, duration, daysOfWeek, numOfRepeatedWeeks, keySteps })
                                    }
                                    nextRepeatedDate.setDate(nextRepeatedDate.getDate() + 1);
                                    console.log(nextRepeatedDate)

                                }


                            }


                        }
                        setEvents([...events, ...tempStateArr])

                        setAddEvent([false, ''])
                        setClicked(null)
                    }}
                    // eventText={eventForDate(clicked) ? eventForDate(clicked).title : null}
                    onDelete={() => {
                        setEvents(events.filter(e => e.date !== clicked))
                        setClicked(null)
                    }}
                    clicked={clicked}
                    setAddEvent={setAddEvent}
                    addEvent={addEvent}
                />
            }
        </>
    )
}
