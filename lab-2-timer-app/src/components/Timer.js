import React, { useContext, useState } from "react";
import { TimerContext } from "../contexts/TimerContext";

export default function Timer({ timer }) {
    const { timerContext, setTimerContext } = useContext(TimerContext);
    const [secs, setSecs] = useState(timer.secs);
    const [buttonInterval, setButtonInterval] = useState(null);
    const [editButton, setEditButton] = useState(false);
    const [startButton, setStartButton] = useState(false);

    const [timerData, setTimerData] = useState({
        title: timer.title,
        project: timer.project,
        secs: timer.secs,
    });

    const { title, project } = timerData;
    const secsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));
        let remainingMinute = secs % (60 * 60);
        let minutes = Math.floor(remainingMinute / 60);
        let remainingSeconds = remainingMinute % 60;
        let seconds = Math.ceil(remainingSeconds);
        let time = { h: hours, m: minutes, s: seconds };
        return time;
    };

    const onChangeFormData = (e) => {
        setTimerData({ ...timerData, [e.target.name]: e.target.value });
    };

    const onClickEditButton = () => {
        setStartButton(false);
        setEditButton(true);
    };

    const onClickDoneButton = () => {
        setEditButton(false);
    };

    const onClickDeleteButton = () => {

    };

    const onClickStartButton = () => {
        setStartButton(true);
        let buttonInterval = setInterval(() => {
            setSecs((prev) => prev + 1);
        }, 1000);
        setButtonInterval(buttonInterval);
    };

    const onClickStopButton = () => {
        setStartButton(false);
        clearInterval(buttonInterval);
        setButtonInterval(null);
    };

    return (
        <div>
            { /* Initalizing the Timers */
                !editButton && (
                <div>
                    <p><h2>Title: {title}</h2></p>
                    <p><h3>Project: {project}</h3></p>
                    <p>Hours: 0{secsToTime(secs).h}</p>
                    <p>Minutes: {secsToTime(secs).m}</p>
                    <p>Seconds: {secsToTime(secs).s}</p>
                    {!startButton && (
                        <div>
                            <button onClick={onClickStartButton} class="button1">
                                <p>Start Timer</p>
                            </button>
                            <button onClick={onClickEditButton} class="button2">
                                <p>Edit Timer</p>
                            </button>
                            <button onClick={onClickDeleteButton} class="button3">
                                <p>Delete Timer</p>
                            </button>
                        </div>
                    )}
                    {startButton && (
                        <button onClick={onClickStopButton} class="button3">
                            <p>End Timer</p>
                        </button>
                    )}
                </div>
            )}
            {editButton && (
                <div>
                    <form>
                        <label><h2>Title</h2></label>
                        <textarea
                            name="title"
                            value={timerData.title}
                            onChange={onChangeFormData}
                        ></textarea>
                        <label><h3> Project </h3></label>
                        <textarea
                            name="project"
                            value={timerData.project}
                            onChange={onChangeFormData}
                        ></textarea>
                        <br></br> <br></br>
                        <button onClick={onClickDoneButton} class="button1">
                            <p>Save</p>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
