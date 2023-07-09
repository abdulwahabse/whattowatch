import TitleSm from './TitleSm';
import { getImageUrl } from './../../../utils/utils';
import Button from './Button';

function Title(props) {
    const starSrc = getImageUrl('assets/icons/star.png');
    const handleTrailerBtnClick = (trailer) => {
        props.setShowTrailerModel(true);
    };

    return (
        <div className={`title ${props.className || ''}`}>
            <TitleSm className="title__sm" poster={props.poster} />
            <div className="title__info-container">
                <div className="title__sub-info-container">
                    <img src={starSrc} alt="star" className="title__star" />
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
        </div>
    );
}

export default Title;
