import ".././Style.css"

function Timers(props){
    return(
        <div className="timers">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.project}
            </p>
        </div>
    );
}

export default Timers;