import React, { useCallback, useEffect, useRef, useState } from 'react';
import Classes from './ProjectCarousel.css';

const projectcarousel = (props) => {

    const [currElement, setCurrElement] = useState(null);

    const ref = useRef(null);

    useEffect(() => {

        console.log("useEffect");
        setCurrElement(ref.current.children[0]);

    }, [ref]);

    const scrollRight = () => {
        if (currElement.nextElementSibling !== null) {
            currElement.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
            setCurrElement(currElement.nextElementSibling);
        }
    };

    const scrollLeft = () => {
        if (currElement.previousElementSibling !== null) {
            currElement.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
            setCurrElement(currElement.previousElementSibling);
        }
    };

    return (
        <div className={Classes.container}>
            <h1>Projects</h1>
            <div className={Classes.carouselStationary}>
                <button className={Classes.leftSlider} onClick={scrollLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px"><path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" /></svg>
                </button>
                <div className={Classes.carouselSlider} ref={ref}>
                    {props.children}
                </div>
                <button className={Classes.rightSlider} onClick={scrollRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" /></svg>
                </button>
            </div>
        </div >
    );
}

export default projectcarousel;