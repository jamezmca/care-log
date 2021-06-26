import React, { useState, useEffect } from 'react'
import * as dayview from './dayview.module.css'
import HourEvent from './HourEvent'


export default function Hour({ days, clicked, hour }) {
    //if not clicked then render is current day and if has time put it in that time bracket

    //depending on size of content, have a state button that either has a max-height on hour bracket or no max height
    return (
        <div className={dayview.hourContainer}>
            <p className={dayview.hourHeader}>{hour}</p>
        </div>
    )
}
