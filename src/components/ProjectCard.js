import React from 'react';
import Classes from './ProjectCard.css';

const projectcard = ({ title, description, link }) => {
    return (
        <div className={Classes.container}>
            <h2 className={Classes.title}>{title}</h2>

            <p className={Classes.description}>
                {description}
            </p>

            <a className={Classes.link} href={link} target="_blank">Repo Link</a>
        </div>
    );
}

export default projectcard;