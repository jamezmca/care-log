import React, { useState } from 'react'
import * as modalStyles from './modal.module.css'

//this is for all the goal input additions but is poorly named

export default function GoalAdditionals({
    addTimeDetail,
    setAddTimeDetail,
    keySteps,
    setKeySteps,
    duration,
    setDuration,
    time,
    setTime,
    makeRepeatedGoal,
    setMakeRepeatedGoal,
    numOfRepeatedWeeks,
    setNumOfRepeatedWeeks,
    daysOfWeek,
    setDaysOfWeek,
}) {
    const [tempKeyStep, setTempKeyStep] = useState('')
    console.log(keySteps[1].length > 0)

    return (
        <>
            {keySteps[1].length > 0 && <div>
                <h3 className={modalStyles.timeLabel} style={{color: 'black', marginBottom: '2px'}}>Key steps:</h3>
                {keySteps[1].map((e, index) => {
                    return <div style={{ display: 'flex' }} key={index}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1 }}>
                            <p>{`${index}: ${e}`}</p>
                        </div>
                        <div className={modalStyles.deleteKeyProgressStep}
                            onClick={() => {
                                let tempArr3 = [...keySteps]
                                let tempSecondArr = tempArr3[1].filter(james => e !== james)
                                tempArr3[1] = tempSecondArr
                                setKeySteps(tempArr3)
                                setTempKeyStep('')
                            }}>
                            <p>x</p>
                        </div>
                    </div>
                })}
            </div>}

            <div>
                <div className={modalStyles.addMoreInfo} onClick={() => {
                    let temp = [...keySteps]
                    temp[0] = !temp[0]
                    setKeySteps(temp)
                    setTempKeyStep('')
                }}>
                    <p>{!keySteps[0] ? "Add progress step" : "Close progress step"}</p>
                </div>
            </div>




            {/* this one needs to add a key steps; input at one end and a plus at the far right
            the next one needs to list out all of them with the index num and then the step div and then an x button vertically
            centered at the right to delete */}

            {keySteps[0] && <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="text" name="keyStep" placeholder="Add a progress step" value={tempKeyStep} onChange={e => setTempKeyStep(e.target.value)} />
                <div className={modalStyles.addKeyProgressStep}
                    onClick={() => {
                        let tempArr2 = [...keySteps]
                        tempArr2[1].push(tempKeyStep)
                        setKeySteps(tempArr2)
                        setTempKeyStep('')
                    }}>
                    <p>+</p>
                </div>
            </div>}

            <div style={{ display: 'flex' }}>
                <div className={modalStyles.addMoreInfo} onClick={() => setAddTimeDetail(!addTimeDetail)}>
                    <p>{!addTimeDetail ? "Add time information" : "Remove time info"}</p>
                </div>
                <div className={modalStyles.addMoreInfo} onClick={() => setMakeRepeatedGoal([!makeRepeatedGoal[0], []])}>
                    <p>{!makeRepeatedGoal[0] ? "Repeat this reminder" : "Do not repeat"}</p>
                </div>
            </div>
            {addTimeDetail && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                <div style={{ flexGrow: 1, paddingRight: '30px' }}>
                    <label htmlFor="time" className={modalStyles.timeLabel} >Time:</label>
                    <input type="time"
                        id="time"
                        name="time"
                        required
                        className={modalStyles.time}
                        onChange={e => setTime(e.target.value)} />
                </div>
                <div style={{ flex: 1 }}>
                    <label htmlFor="duration" className={modalStyles.durationLabel} >Duration:</label>
                    <input type="text"
                        id="duration"
                        name="duration"
                        placeholder="hrs"
                        className={modalStyles.duration}
                        onChange={e => setDuration(e.target.value)} />
                </div>
            </div>}
            {makeRepeatedGoal[0] && <div style={{ marginBottom: '10px' }}>
                {daysOfWeek.map((day, key) => {
                    return <div className={modalStyles.repeatedReminderDay} key={key} onClick={() => {
                        let tempArr = [...daysOfWeek]
                        daysOfWeek.find(dayOfWeek => dayOfWeek[0] === day[0])[1] = !daysOfWeek.find(dayOfWeek => dayOfWeek[0] === day[0])[1]
                        setDaysOfWeek(tempArr)
                    }}>
                        <div className={day[1] ? modalStyles.boxSelected : modalStyles.boxUnselected}></div>
                        <p className={day[1] ? modalStyles.daySelected : modalStyles.dayUnselected}>{day[0]}</p>
                    </div>
                })}
                <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
                    <label htmlFor="numOfWeeks">Number of weeks to repeat for:</label>
                    <input type="text" name="numOfWeeks" value={numOfRepeatedWeeks} onChange={e => setNumOfRepeatedWeeks(e.target.value)} />
                </div>

            </div>}
        </>

    )
}
