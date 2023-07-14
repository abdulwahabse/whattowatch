import { getImageUrl } from './../../../utils/utils';
import { Link } from 'react-router-dom';

function SectionHeading(props) {
    const rightArrow = getImageUrl('assets/icons/right-arrow-gray.png');
    return (
        <div className={`section-heading ${props.className}`}>
            <Link
                className={`section-heading__link ${
                    props.link
                        ? 'section-heading__link-hover'
                        : 'section-heading__no-link'
                }`}
                to={props.link || '/'}
            >
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
            </Link>
        </div>
    );
}

export default SectionHeading;
