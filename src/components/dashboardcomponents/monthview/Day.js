import React from 'react'
import * as monthView from './monthview.module.css'


export default function Day({ day, onClick, shadow, isClickedDay }) {
    const bool = day.event?.length ? day.event.length : false
    // console.log(bool)
    const className = `${monthView.day} 
        ${day.value === 'padding' ? `${monthView.padding}` : ''} 
        ${day.isCurrentDay ? `${monthView.currentDay}` : ''} 
        ${isClickedDay ? `${monthView.isClicked}` : ''}`

    return (
        <div onClick={onClick} className={className} style={{ boxShadow: `0 0 2px ${shadow}` }}>
            <div style={{ display: 'flex', backgroundColor: 'transparent' }}>
                {day.value === 'padding' ? '' : <h4>{day.value}</h4>}
                {bool && <h4 style={{ flex: 1, textAlign: 'center' }}>Items: {bool}</h4>}
            </div>
            <div style={{overflowY: 'scroll'}}>
                {day.event && day.event.map((e, index) => {
                    return <div key={index} className={monthView.event}><p>{e.title}</p></div>
                })
                }
            </div>
        </div>
    )
}