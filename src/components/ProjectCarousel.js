import React from 'react';
import Classes from './ProjectCarousel.css';

const projectcarousel = (props) => {
    return (
        <div className={Classes.container}>
            <h1>Projects</h1>
            <div className={Classes.innerContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default projectcarousel;