import React from 'react'
import * as monthView from './monthview.module.css'

export default function Day({ day, onClick, shadow, isClickedDay }) {
    const bool = day.event?.length ? day.event.length : false
    const className = `${monthView.day} 
        ${day.value === 'padding' ? `${monthView.padding}` : ''} 
        ${day.isCurrentDay ? `${monthView.currentDay}` : ''} 
        ${isClickedDay ? `${monthView.isClicked}` : ''}`

    function backgroundColorSelector(cardType) {
        if (cardType === 'reminder') return "radial-gradient(#1fe4f5, #3fbafe)"
        if (cardType === 'note') return "radial-gradient(#76b2fe, #b69efe)"
        if (cardType === 'goal') return "radial-gradient(#60efbc, #58d5c9)"
    }

    let eventsSortedByTime = false

    if (day.event?.length > 0) {
        eventsSortedByTime = [...day.event]

        for (let i = 0; i < day.event.length; i++) {
            for (let j = 0; j < day.event.length; j++) {
                if (eventsSortedByTime[j]?.time > eventsSortedByTime[j + 1]?.time) {
                    let tmp = eventsSortedByTime[j];
                    eventsSortedByTime[j] = eventsSortedByTime[j + 1];
                    eventsSortedByTime[j + 1] = tmp;
                }
                if (eventsSortedByTime[j]?.time === "" && eventsSortedByTime[j+1] !== undefined) {
                    // console.log(eventsSortedByTime[j])
                    let tmp = eventsSortedByTime[j];
                    eventsSortedByTime[j] = eventsSortedByTime[j + 1];
                    eventsSortedByTime[j + 1] = tmp;
                }
            }
        }
    }

    // console.log(eventsSortedByTime)


    return (
        <div onClick={onClick} className={className} style={{ boxShadow: `0 0 2px ${shadow}` }}>
            <div style={{ display: 'flex', backgroundColor: 'transparent' }}>
                {day.value === 'padding' ? '' : <h4>{day.value}</h4>}
                {bool && <h4 style={{ flex: 1, textAlign: 'center' }}>Items: {bool}</h4>}
            </div>
            <div style={{ overflowY: 'scroll' }}>
                {eventsSortedByTime && eventsSortedByTime.map((e, index) => {
                     return <div key={index} className={monthView.event} style={{ background: backgroundColorSelector(e.type), display: 'flex', justifyContent: 'space-between' }}><p>{e.title}</p>{e.time !== "" && <p>{e.time}</p>}</div>
                })
                }
            </div>
        </div>
    )
}