import { Link } from 'react-router-dom';
import { getImageUrl } from './../../../utils/utils';

function TitleSm(props) {
    const link = `/titles/${props.id}`;
    const bookMarkSrc = getImageUrl('assets/icons/bookmark.png');
    const handleBookmarkClick = () => {
        console.log('BookMark clicked');
    };
    const handleTitleClick = () => {
        console.log('TitleSm clicked');
    };

    return (
        <div className={`title-sm ${props.className}`}>
            <Link to={link}>
                <div className="title-sm__container">
                    <img
                        src={bookMarkSrc}
                        alt="bookmark"
                        className="title-sm__bookmark"
                        onClick={handleBookmarkClick}
                    />
                    <img
                        src={props.poster}
                        alt=""
                        className={`title-sm__img ${
                            props.isRounded ? 'title-sm__img--rounded' : ''
                        }`}
                        onClick={handleTitleClick}
                    />
                </div>
            </Link>
        </div>
    );
}

export default TitleSm;
