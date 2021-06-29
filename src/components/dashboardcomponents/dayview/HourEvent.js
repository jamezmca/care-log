import React, { useState } from 'react'
import * as dayview from './dayview.module.css'


export default function HourEvent({ event }) {
    const [expanded, setExpanded] = useState(true)
    //have an expand and an x button on the right side, expand changes the height of the item to show description
    return (
        <div className={dayview.hourEvent}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>{event.title}</div> <p style={{ fontSize: '10px' }}>{event.time}</p>
            </div>

            {expanded &&
                <p style={{ fontSize: '10px' }}>{event.description}</p>}
        </div>
    )
}
