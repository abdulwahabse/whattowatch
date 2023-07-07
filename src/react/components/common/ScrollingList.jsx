import { useRef, useState, useEffect } from 'react';
import { getImageUrl } from '../../../utils/utils';
function ScrollingList(props) {
    const leftArrowSrc = getImageUrl('assets/icons/left-arrow.png');
    const rightArrowSrc = getImageUrl('assets/icons/right-arrow.png');
    const elementRef = useRef(null);
    const [leftArrowDisable, setLeftArrowDisable] = useState(true);
    const [rightArrowDisable, setRightArrowDisable] = useState(false);
    const speed = 5;
    const distance = 500;

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
            <div className="img-container" ref={elementRef}>
                {/* List iteration */}
                {props.children.map((child, index) => (
                    <div
                        className="scrolling-list__items-container"
                        key={index}
                    >
                        <props.component />
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
