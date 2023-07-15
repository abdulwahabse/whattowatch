import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from './../../../utils/utils';
import { useUser } from '../../../contexts/userContext';
import { useModel } from '../../../contexts/modelContext';
import AuthenticatorModel from './AuthenticatorModel';

function TitleSm(props) {
    const { user, addToWatchlist, removeFromWatchlist } = useUser();
    const { showBookmarkAuth } = useModel();
    const link = `/titles/${props.id}`;
    const bookMarkSrc = getImageUrl('assets/icons/bookmark.png');
    const bookmarked = user.watchlist.includes(props.id);

    const handleBookmarkClick = (e) => {
        e.stopPropagation();

        if (user.isLoggedIn) {
            if (bookmarked) {
                removeFromWatchlist(props.id);
            } else {
                addToWatchlist(props.id);
            }
        } else {
            showBookmarkAuth();
        }
    };
    const handleTitleClick = () => {};

    return (
        <div className={`title-sm ${props.className}`}>
            <div className="title-sm__container">
                <img
                    src={bookMarkSrc}
                    alt="bookmark"
                    className={`title-sm__bookmark ${
                        bookmarked ? 'title-sm__bookmark--bookmarked' : ''
                    }`}
                    onClick={(e) => handleBookmarkClick(e)}
                />
                <Link to={link}>
                    <img
                        src={props.poster}
                        alt=""
                        className={`title-sm__img ${
                            props.isRounded ? 'title-sm__img--rounded' : ''
                        }`}
                        onClick={handleTitleClick}
                    />
                </Link>
            </div>
        </div>
    );
}

export default TitleSm;
