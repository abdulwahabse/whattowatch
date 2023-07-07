import TitleSm from './TitleSm';
import { getImageUrl } from './../../../utils/utils';
import Button from './Button';

function Title(props) {
    const starSrc = getImageUrl('assets/icons/star.png');
    return (
        <div className={`title ${props.className}`}>
            <TitleSm
                className="title__sm"
                img=" https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg"
            />
            <div className="title__info-container">
                <div className="title__sub-info-container">
                    <img src={starSrc} alt="star" className="title__star" />
                    <span className="title__rating typography-5">8.5</span>
                    <span className="title__type typography-5">Movie</span>
                </div>
                <h3 className="title__name  typography-4 color-light">
                    Dune: Part 2
                </h3>
                <Button
                    className="title__btn"
                    icon="play"
                    color="secondary"
                    size="sm"
                    full={true}
                >
                    PLAY TRAILER
                </Button>
            </div>
        </div>
    );
}

export default Title;
