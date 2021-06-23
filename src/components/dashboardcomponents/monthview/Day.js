import React from 'react'
import * as monthView from './monthview.module.css'


export default function Day({day, onClick}) {
    const className = `${monthView.day} ${day.value === 'padding' ? `${monthView.padding}` : ''} ${day.isCurrentDay ? `${monthView.currentDay}` : ''}`

    return (
        <div onClick={onClick} className={className}>
            {day.value === 'padding' ? '' : day.value}

            {day.event && <div className={monthView.event}><p>{day.event.title}</p></div>}
        </div>
    )
}