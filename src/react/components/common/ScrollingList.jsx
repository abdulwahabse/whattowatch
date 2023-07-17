import { useRef, useState, useEffect } from 'react';
import leftArrow from '/assets/icons/left-arrow.png';
import rightArrow from '/assets/icons/right-arrow.png';

function ScrollingList(props) {
    const elementRef = useRef(null);
    const [leftArrowDisable, setLeftArrowDisable] = useState(true);
    const [rightArrowDisable, setRightArrowDisable] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        setLeftArrowDisable(element.scrollLeft === 0);
        setRightArrowDisable(
            element.scrollLeft >= element.scrollWidth - element.clientWidth
        );
    }, []);

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            setLeftArrowDisable(element.scrollLeft === 0);
            setRightArrowDisable(
                element.scrollLeft >= element.scrollWidth - element.clientWidth
            );
        }, speed);
    };

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [speed, setSpeed] = useState(calculateSpeed(viewportWidth));
    const [distance, setDistance] = useState(calculateDistance(viewportWidth));

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setSpeed(calculateSpeed(viewportWidth));
        setDistance(calculateDistance(viewportWidth));
    }, [viewportWidth]);

    function calculateSpeed(width) {
        return Math.floor(width / 400); // Adjust the divisor as needed
    }

    function calculateDistance(width) {
        return Math.floor(width / 3); // Adjust the divisor as needed
    }

    return (
        <div className="scrolling-list">
            <button
                className="scrolling-list__left-arrow-btn"
                onClick={() => {
                    handleHorizantalScroll(
                        elementRef.current,
                        speed,
                        distance,
                        -10
                    );
                }}
                disabled={leftArrowDisable}
            >
                <img
                    className="scrolling-list__left-arrow-img"
                    src={leftArrow}
                    alt="left-arrow"
                />
            </button>
            <div
                className={`scrolling-list__list-container ${
                    props.scrollable
                        ? 'scrolling-list__list-container--scrollable'
                        : ''
                }`}
                ref={elementRef}
            >
                {/* List iteration */}
                {props.children &&
                    props.children.map((child, index) => (
                        <div
                            className="scrolling-list__items-container"
                            key={index}
                        >
                            <props.component
                                {...child}
                                {...props}
                                number={index + 1}
                            />
                        </div>
                    ))}
            </div>
            <button
                className="scrolling-list__right-arrow-btn"
                onClick={() => {
                    handleHorizantalScroll(
                        elementRef.current,
                        speed,
                        distance,
                        10
                    );
                }}
                disabled={rightArrowDisable}
            >
                <img
                    className="scrolling-list__right-arrow-img"
                    src={rightArrow}
                    alt="right-arrow"
                />
            </button>
        </div>
    );
}

export default ScrollingList;
