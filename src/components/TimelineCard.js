import React, { useState } from "react";
import Classes from "./TimelineCard.css";

const timelinecard = (props) => {

    var n = 0;
    let descList = props.description.split('.').map(d => {
        if (d !== "")
            return (<li key={n++}><p>{d.trim()}</p></li>)
        return null;
    });

    const [isCardOpen, setCount] = useState(false);

    const toggleCard = () => {
        setCount(!isCardOpen);
    }

    return (
        <div className={Classes.container}>
            <div className={Classes.head}>
                <h2>{props.title}</h2>
                <h4>{props.duration}</h4>
            </div>
            <button className={Classes.expand} onClick={toggleCard}>
                {!isCardOpen &&
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="20px" height="20px"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><g><g><path d="M7.71,9.29l3.88,3.88l3.88-3.88c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41l-4.59,4.59 c-0.39,0.39-1.02,0.39-1.41,0L6.29,10.7c-0.39-0.39-0.39-1.02,0-1.41l0,0C6.68,8.91,7.32,8.9,7.71,9.29z" /></g></g></g></svg>
                }
                {isCardOpen &&
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="20px" height="20px"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><g><g><path d="M7.71,15.29l3.88-3.88l3.88,3.88c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59 c-0.39-0.39-1.02-0.39-1.41,0l-4.59,4.59c-0.39,0.39-0.39,1.02,0,1.41l0,0C6.68,15.67,7.32,15.68,7.71,15.29z" /></g></g></g></svg>
                }
            </button>

            {isCardOpen &&
                <div className={Classes.body}>
                    <div>
                        <h3>{props.org}</h3>
                        <h4>{props.place}</h4>
                    </div>
                    <ul>
                        {descList}
                    </ul>
                </div>
            }
        </div>
    );
}

export default timelinecard;