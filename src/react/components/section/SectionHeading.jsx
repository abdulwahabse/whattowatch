import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom';
import rightArrow from '/assets/icons/right-arrow-gray.png';

function SectionHeading(props) {
    const currentPath = useLocation().pathname;
    const mainClass = `section-heading ${
        props.link ? 'section-heading--linked' : ''
    } ${props.className}`;

    return (
        <div className={mainClass}>
            <Link
                to={props.link || currentPath}
                className={`section-heading__link ${
                    props.link ? '' : 'section-heading__link--disabled'
                }`}
            >
                <div className="section-heading__container">
                    <h2 className="section-heading__heading typography-1 color-light">
                        {props.children}
                    </h2>
                    {props.link && (
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
