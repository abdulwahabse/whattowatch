import { getImageUrl } from './../../../utils/utils';

function SectionHeading(props) {
    const rightArrow = getImageUrl('assets/icons/right-arrow-gray.png');
    return (
        <div className={`section-heading ${props.className}`}>
            <div className="section-heading__container">
                <h2 className="section-heading__heading typography-1 color-light">
                    {props.children}
                </h2>
                {props.showArrow && (
                    <img
                        className="section-heading__img"
                        src={rightArrow}
                        alt="right-arrow"
                    />
                )}
            </div>
        </div>
    );
}

export default SectionHeading;
