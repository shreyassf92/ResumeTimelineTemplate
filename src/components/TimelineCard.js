import React from "react";
import Classes from "./TimelineCard.css";

const timelinecard = (props) => {

    let desc = props.description;
    console.log(desc);
    var n = 0;
    let descList = desc.split('.').map(d => {
        return (<li key={n++}>{d.trim()}</li>)
    });

    return (
        <div className={Classes.container}>
            <div className={Classes.head}>
                <div className={Classes.head_col1}>
                    <h2>{props.title}</h2>
                    <h3>{props.org}</h3>
                </div>
                <div className={Classes.head_col2}>
                    <p>{props.duration}</p>
                    <p>{props.place}</p>
                </div>
            </div>
            <div className={Classes.body}>
                <ul>
                    {descList}

                    {/* <li>point 1</li>
                    <li>point 2</li>
                    <li>point 3</li>
                    <li>point 4</li> */}
                </ul>
            </div>
        </div>
    );
}

export default timelinecard;