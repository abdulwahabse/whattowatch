import { useRef, useState, useEffect } from 'react';
import { getImageUrl } from '../../../utils/utils';
function ScrollingList(props) {
    const leftArrowSrc = getImageUrl('assets/icons/left-arrow.png');
    const rightArrowSrc = getImageUrl('assets/icons/right-arrow.png');
    const elementRef = useRef(null);
    const [leftArrowDisable, setLeftArrowDisable] = useState(true);
    const [rightArrowDisable, setRightArrowDisable] = useState(false);
    // const speed = 5;
    // const distance = 2000;
    // const speed = props.speed || 5;
    // const distance = props.distance || 100;

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

    // Adjust speed and distance based on viewport width
    // const viewportWidth = window.innerWidth;
    // const speed = Math.floor(viewportWidth / 2000); // Adjust the divisor as needed
    // const distance = Math.floor(viewportWidth / 3); // Adjust the divisor as needed
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
                    src={leftArrowSrc}
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
                {props.children.map((child, index) => (
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
                    src={rightArrowSrc}
                    alt="right-arrow"
                />
            </button>
        </div>
    );
}

export default ScrollingList;
