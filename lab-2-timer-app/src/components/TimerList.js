import React from 'react';
import Timers from './Timers';

const timers = [
    {
        title: "Read Journal Papers",
        project: "Design Project"
    },
    {
        title: "Do Cardio Excercise",
        project: "Gymnasium"
    },
    {
        title: "Clean Room",
        project: "Self Care"
    }
]

function TimerList(){
    return (
        <div className='timerlist'>
            <h1>Timers</h1>
            {timers.map((timers,index) => <Timers key = {index} title = {timers.title} project = {timers.project}></Timers>)}
        </div>
    )
}

export default TimerList;