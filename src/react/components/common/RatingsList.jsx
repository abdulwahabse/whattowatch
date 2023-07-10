import { getImageUrl } from '../../../utils/utils';

function RatingsList(props) {
    const starIcon = getImageUrl('assets/icons/star.png');
    const star2Icon = getImageUrl('assets/icons/star-2.png');
    const start2UnfilledIcon = getImageUrl('assets/icons/star-2-unfilled.png');
    return (
        <div className={`ratings-list ${props.className || ''}`}>
            <div className="ratings-list__user-ratings-main-container">
                <p className="ratings-list__user-ratings-heading typography-3 color-light">
                    User Ratings
                </p>
                <div className="ratings-list__container">
                    <img
                        src={starIcon}
                        alt="star"
                        className="ratings-list__yellow-star"
                    />
                    <div className="ratings-list__user-ratins-container">
                        <p className="ratings-list__user-ratings typography-3 color-light">
                            <span className="ratings-list__user-rating">
                                8.0
                            </span>
                            /10
                        </p>
                        <p className="ratings-list__user-ratings-quantity typography-4 color-light">
                            200k
                        </p>
                    </div>
                </div>
            </div>

            <div className="ratings-list__your-ratings-main-container">
                <p className="ratings-list__your-ratings-heading typography-3 color-light">
                    Your Ratings
                </p>
                <div className="ratings-list__your-ratins-container">
                    <img
                        src={start2UnfilledIcon}
                        alt="star"
                        className="ratings-list__blue-star"
                    />
                    <p className="ratings-list__your-ratings typography-2 color-primary">
                        Rate
                    </p>
                </div>
            </div>

            <div className="ratings-list__age-rating-main-container">
                <p className="ratings-list__age-rating-heading typography-3 color-light">
                    Age Rating
                </p>
                <p className="ratings-list__age-rating typography-3 color-light">
                    PG-13
                </p>
            </div>
        </div>
    );
}

export default RatingsList;
