import React, {useState, useContext} from 'react';
import Timer from './Timer'
import { TimerContext } from '../contexts/TimerContext';
import '../App.css';

export default function TimerList(){
    const {timerContext, setTimerContext} = useContext(TimerContext)
    const [formData, setFormData] = useState({title: "", project: ""});
    const [addButton, setAddButton] = useState(false)

    const onChangeFormData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const changeAddButtonStatus = () => {
        setAddButton(!addButton)
    }

    const createButtonOnClick = () => {
        changeAddButtonStatus()
        setTimerContext([...timerContext, {title: formData.title, project: formData.project, secs: 0}])
        setFormData({
            title: "",
            project: ""
        })
    }

    const cancelButtonClick = () => {
        changeAddButtonStatus()
    }

    return(
        <div class>
            <h1>Timers</h1>
            {timerContext.map(timer => <div>
                <table border = "1" align = "center" width= "500px" >
                <tr>
                <Timer timer = {{...timer}} />
                </tr> <br></br>
                </table>
                <br></br>
            </div>)}
        {!addButton && 
        <div>
            <button onClick = {changeAddButtonStatus} class="button1"><p>Create a new timer</p></button>
            <br></br>
            <br></br>
        </div>}
        {addButton && 
        <div>
            <form>
                <table border = "1" align = "center" width= "500px" >
                    <tr>
                <h2>Creating a new timer</h2> <hr></hr>
                <label><h2>Title</h2></label>
                <textarea name = {"title"} value = {formData.title} onChange = {onChangeFormData}></textarea>
                <label><h2>Project</h2></label>
                <textarea name = {"project"} value = {formData.project} onChange = {onChangeFormData}></textarea>
                <br></br>
                <button onClick = {createButtonOnClick} class="button1">Create Timer</button>
                <button onClick = {cancelButtonClick} class="button3">Back</button>
                </tr>
                </table>
            </form>
            <br></br>
        </div>}
        </div> 
    )
}