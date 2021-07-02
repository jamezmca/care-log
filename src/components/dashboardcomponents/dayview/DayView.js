import React, { useState, useEffect } from 'react'
import Card from './Card'
import * as dayview from './dayview.module.css'


export default function DayView({ clicked, nav, days, eventsForClickedDay, hourSelected, setHourSelected }) {
    // default colors palegreen, paleturquoise, thistle

    return (
        <div className={dayview.container}>
            <Card cardType="reminder"/>
            <Card cardType="note"/>
            <Card cardType="goal"/>
        </div>
    )
}

