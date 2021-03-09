import React from 'react';
import Classes from './ProjectCard.css';

const projectcard = (props) => {
    return (
        <div className={Classes.container}>
            <h2 className={Classes.title}>{props.title}</h2>

            <p className={Classes.description}>
                Computer Architecture Simulation Tools: Applied object-oriented programming concepts, design principles, design patterns to develop cache simulation, branch prediction & dynamic scheduling simulation tools in Java, under supervision of Dr. Yan Solihin
            </p>

            <a className={Classes.link} href="/">git link</a>
        </div>
    );
}

export default projectcard;