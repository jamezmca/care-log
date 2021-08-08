import React from 'react'
import * as dayview from './dayview.module.css'


export default function Card({ cardType, event, editDelete, deleteEvent }) {
    function backgroundColorSelector(cardType) {
        if (cardType === 'reminder') return "radial-gradient(#1fe4f5, #3fbafe)"
        if (cardType === 'note') return "radial-gradient(#76b2fe, #b69efe)"
        if (cardType === 'goal') return "radial-gradient(#60efbc, #58d5c9)"
    }

    let cursorPointer = editDelete ? 'pointer' : 'auto'

    //for note content search for new line and add only one new line
    const noteContent = (
        <div className={dayview.cardContainer} style={{ background: backgroundColorSelector(cardType), cursor: cursorPointer }}>

            <div className={dayview.noteContainer}>
                {event.title.split("\n").length > 1 ?
                    event.title.split('\n').map((note, index) => {
                        return <p key={`${note}${index}`}>{note}</p>
                    }) :
                    <p>{event.title}</p>}
            </div>
            {editDelete && <div style={{ display: 'flex', backgroundColor: 'transparent', justifyContent: 'center' }}>
                <div style={{ backgroundColor: 'transparent' }}><p onClick={() => deleteEvent(event.id)}>x</p></div>
            </div>}
        </div>
    )

    const reminderContent = (
        <div className={dayview.cardContainer} style={{ background: backgroundColorSelector(cardType), cursor: cursorPointer }}>

            <div className={dayview.reminderContainer}>
                <div style={{ fontSize: '15px', fontWeight: '500', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between', marginBottom: '4px', borderBottom: '1px solid white' }}>
                    <p >{event.title.toUpperCase()}</p> <p>{event.time}</p>
                </div>
                <div style={{ backgroundColor: 'transparent' }}>
                    <p>{event.description}</p>
                    {event.duration !== "" && <p style={{ textAlign: 'right', opacity: 0.8, fontSize: '11px' }}>Duration: {event.duration}hrs</p>}
                </div>
            </div>
            {editDelete && <div style={{ display: 'flex', backgroundColor: 'transparent', justifyContent: 'center' }}>
                <div style={{ backgroundColor: 'transparent' }}><p onClick={() => deleteEvent(event.id)}>x</p></div>
            </div>}
        </div>
    )

    const goalContent = (
        <div className={dayview.cardContainer} style={{ background: backgroundColorSelector(cardType), cursor: cursorPointer }}>

            <div className={dayview.goalContainer}>
                <div style={{ fontSize: '15px', fontWeight: '500', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between', marginBottom: '4px', borderBottom: '1px solid white' }}>
                    <p >{event.title.toUpperCase()}</p> <p>{event.time}</p>
                </div>
                <div style={{ backgroundColor: 'transparent' }}>
                    <p>{event.description}</p>
                </div>
                {event.keySteps[1].length > 0 && <div style={{ backgroundColor: 'transparent' }}>
                    <p style={{ textAlign: 'left', textDecoration: 'underline' }}>Key steps:</p>
                    {event.keySteps[1].map((keyStep, index) => {
                        return <p key={`${keyStep}${index}`}>{index + 1}: {keyStep}</p>
                    })}

                </div>}



                {event.duration !== "" && <p style={{ textAlign: 'right', opacity: 0.8, fontSize: '11px' }}>Duration: {event.duration}hrs</p>}

            </div>
            {editDelete && <div style={{ display: 'flex', backgroundColor: 'transparent', justifyContent: 'center', marginLeft: '5px' }}>
                <div style={{ backgroundColor: 'transparent' }}><p onClick={() => deleteEvent(event.id)}>x</p></div>
            </div>}
        </div>
    )

    if (cardType === 'reminder') return reminderContent
    if (cardType === 'note') return noteContent
    if (cardType === 'goal') return goalContent

}
