import React from "react";
import Classes from "./Timeline.css";

const timeline = (props) => {

    let childLi = React.Children.map(props.children, (child) => {
        return <li className={Classes.items}>{child}</li>
    });

    return (
        <div className={Classes.container}>
            <h1>Work & Education</h1>
            <ul className={Classes.listContainer}>
                {childLi}
                {/* <li>test1</li>
                <li>test2</li> */}
            </ul>
        </div>
    )

}

export default timeline;