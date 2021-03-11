import React, { useEffect, useRef, useState, Children, useLayoutEffect } from 'react';
import Classes from './ProjectCarousel.css';

const projectcarousel = (props) => {

    const [currCard, setCurrCard] = useState(null);

    const [cardId, setCardId] = useState(0);

    const parentNode = useRef(null);

    useEffect(() => {
        setCurrCard(parentNode.current.children[0]);

    }, [parentNode]);

    const scrollRight = () => {
        if (currCard.nextElementSibling !== null) {
            currCard.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
            setCurrCard(currCard.nextElementSibling);
        }
        if (cardId < parentNode.current.children.length - 1)
            setCardId(cardId + 1);
    };

    const scrollLeft = () => {
        if (currCard.previousElementSibling !== null) {
            currCard.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
            setCurrCard(currCard.previousElementSibling);

            if (cardId > 0)
                setCardId(cardId - 1);
        }
    };

    const onRadioChange = (e) => {
        setCardId(parseInt(e.target.id));
        parentNode.current.children[parseInt(e.target.id)].scrollIntoView({ behavior: 'smooth' });
    }

    let n = 0;
    let radio = Children.map(props.children, (child, id) => {
        return <input key={id} id={id} type="radio" name="cardselector" checked={id === cardId} onChange={onRadioChange} />
    });

    return (
        < div className={Classes.container} >
            <h1>Projects</h1>
            <div className={Classes.carouselStationary}>
                <button className={Classes.leftSlider} onClick={scrollLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px"><path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" /></svg>
                </button>
                <div className={Classes.carouselSlider} ref={parentNode}>
                    {props.children}
                </div>
                <button className={Classes.rightSlider} onClick={scrollRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" /></svg>
                </button>
            </div>
            <div className={Classes.sliderIndicator}>
                {radio}
            </div>
        </div >
    );
}

export default projectcarousel;