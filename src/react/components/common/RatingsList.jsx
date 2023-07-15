import { getImageUrl } from '../../../utils/utils';

function RatingsList(props) {
    const starIcon = getImageUrl('assets/icons/star.png');
    const star2Icon = getImageUrl('assets/icons/star-2.png');
    const start2UnfilledIcon = getImageUrl('assets/icons/star-2-unfilled.png');
    return (
        <div className={`ratings-list ${props.className || ''}`}>
            <p className="ratings-list__user-ratings-heading typography-4 color-light">
                User Ratings
            </p>
            <div className="ratings-list__user-ratings-container">
                <img
                    src={starIcon}
                    alt="star"
                    className="ratings-list__yellow-star"
                />
                <div className="ratings-list__user-ratins-container">
                    <p className="ratings-list__user-ratings typography-4 color-light">
                        <span className="ratings-list__user-rating">
                            {props.userRatings}
                        </span>
                        /10
                    </p>
                    {/* <p className="ratings-list__user-ratings-quantity typography-4 color-light">
                        200k
                    </p> */}
                </div>
            </div>

            <p
                style={{
                    display: 'none',
                }}
                className="ratings-list__your-ratings-heading typography-4 color-light"
            >
                Your Ratings
            </p>
            <div
                style={{
                    display: 'none',
                }}
                className="ratings-list__your-ratings-container"
            >
                <img
                    src={start2UnfilledIcon}
                    alt="star"
                    className="ratings-list__blue-star"
                />
                <p className="ratings-list__your-ratings typography-4 color-primary">
                    Rate
                </p>
            </div>

            <p className="ratings-list__age-rating-heading typography-4 color-light">
                Age Rating
            </p>
            <p className="ratings-list__age-rating typography-4 color-light">
                {props.ageRating}
            </p>
        </div>
    );
}

export default RatingsList;
