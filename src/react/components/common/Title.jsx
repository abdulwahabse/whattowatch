import TitleSm from './TitleSm';
import Button from './Button';
import { useModel } from '../../../contexts/modelContext';
import { Link } from 'react-router-dom';
import starIcon from '/assets/icons/star.png';

function Title(props) {
    const { showTrailer } = useModel();

    const handleLinkClick = (e) => {
        if (e.target.classList.contains('title__btn')) {
            e.preventDefault();
            return;
        }
    };
    const handleTrailerBtnClick = (url) => {
        showTrailer(url);
    };

    return (
        <div className={`title ${props.className || ''}`}>
            <TitleSm
                className="title__sm"
                poster={props.poster}
                id={props.id}
            />
            <Link
                to={`/titles/${props.id}`}
                onClick={(e) => handleLinkClick(e)}
                className="title__link"
            >
                <div className="title__info-container">
                    <div className="title__sub-info-container">
                        <img
                            src={starIcon}
                            alt="star"
                            className="title__star"
                        />
                        <span className="title__rating typography-5">
                            {props.rating}
                        </span>
                        <span className="title__type typography-5">
                            {props.type}
                        </span>
                    </div>
                    <h3 className="title__name  typography-4 color-light">
                        {props.name}
                    </h3>
                    <Button
                        className="title__btn"
                        icon="play"
                        color="secondary"
                        size="sm"
                        full={true}
                        onClick={() => handleTrailerBtnClick(props.trailer)}
                    >
                        PLAY TRAILER
                    </Button>
                </div>
            </Link>
        </div>
    );
}

export default Title;
