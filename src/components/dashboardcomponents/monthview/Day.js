import React from 'react'
import * as monthView from './monthview.module.css'


export default function Day({ day, onClick, shadow }) {
    const className = `${monthView.day} ${day.value === 'padding' ? `${monthView.padding}` : ''} ${day.isCurrentDay ? `${monthView.currentDay}` : ''}`

    return (
        <div onClick={onClick} className={className} style={{ boxShadow: `0 0 2px ${shadow}` }}>
            <div style={{display: 'flex', backgroundColor:'transparent'}}>
                {day.value === 'padding' ? '' : <h4>{day.value}</h4>}
                {day.event?.title && <h4 style={{flex: 1, textAlign: 'center'}}>Items: 1</h4>}
            </div>

            {day.event && <div className={monthView.event}><p>{day.event.title}</p></div>}
        </div>
    )
}