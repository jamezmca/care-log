import React, { useState } from 'react'
import * as dayview from './dayview.module.css'


export default function HourEvent({ event }) {
    const [expanded, setExpanded] = useState(true)
    let expandedCSS = expanded ? '' : { maxHeight: '60px', overflow: 'scroll' }
    console.log(event.description)
    //have an expand and an x button on the right side, expand changes the height of the item to show description
    return (
        <div className={dayview.hourEvent}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}><p>{event.title}</p></div> <p style={{ fontSize: '10px' }}>{event.time}</p>
            </div>
            <p style={{ fontSize: '10px' }}>{event.description}</p>
        </div>
    )
}



