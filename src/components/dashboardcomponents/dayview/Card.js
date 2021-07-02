import React from 'react'
import * as dayview from './dayview.module.css'


export default function Card({cardType}) {
    function backgroundColorSelector(cardType) {
        if (cardType === 'reminder') return "radial-gradient(#1fe4f5, #3fbafe)"
        if (cardType === 'note') return "radial-gradient(#76b2fe, #b69efe)"
        if (cardType === 'goal') return "radial-gradient(#60efbc, #58d5c9)"
    }
    const noteContent = [] //jsx
    const reminderContent = [] //jsx
    const goalContent = [] //jsx
    
    return (
        <div className={dayview.cardContainer} style={{background: backgroundColorSelector(cardType)}}>
            <p>Tacos are very </p>
        </div>
    )
}
