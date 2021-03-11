import React from 'react';
import Classes from './ProjectCard.css';

const projectcard = (props) => {
    return (
        <div className={Classes.container}>
            <h2 className={Classes.title}>{props.title}</h2>

            <p className={Classes.description}>
                {props.description}
            </p>

            <a className={Classes.link} href={props.link}>Repo Link</a>
        </div>
    );
}

export default projectcard;