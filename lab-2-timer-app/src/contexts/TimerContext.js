import { createContext, useState } from "react";
export const TimerContext = createContext();

export function TimerProvider(props){
    const [timerContext, setTimerContext] = useState(require('../data/timerData.json'))
    return(
        <TimerContext.Provider value = {{timerContext, setTimerContext}}>
            {props.children}
        </TimerContext.Provider>
    )
}