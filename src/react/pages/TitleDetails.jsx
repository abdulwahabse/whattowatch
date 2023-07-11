import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import { getTitle } from '../../api/titlesAndUserFetcher';
import BulletedList from '../components/common/BulletedList';
import TitleSm from '../components/common/TitleSm';
import YouTube from '../components/common/YouTube';
import OutlinedList from '../components/common/OutlinedList';
import RatingsList from '../components/common/RatingsList';
import SectionHeading from '../components/section/SectionHeading';
import StreamingServicesList from '../components/common/StreamingServicesList';
import CastsList from '../components/common/CastsList';
function TitlesDetails() {
    const titleId = useParams().id;
    const [title, setTitle] = useState({});

    useEffect(() => {
        (async function () {
            const title = await getTitle(titleId);
            setTitle(title);
            console.log('title', title);
        })();
    }, [titleId]);
    return (
        <div className="title-details">
            <div className="container">
                <BackButton />
                <div className="title-details__header">
                    <h1 className="title-details__name typography-1 color-lightest">
                        {title.name}
                    </h1>
                    <BulletedList
                        items={[
                            title.type,
                            title.runtime,
                            title['release-date'],
                        ]}
                        component="p"
                        className="title-details__description typography-4 color-light"
                    />
                    <TitleSm
                        poster={title.poster}
                        isRounded={true}
                        className="title-details__poster"
                    />
                    <YouTube
                        url={title.trailer}
                        className="title-details__trailer"
                    />
                    <div className="title-details__genres-and-shortdesc-container">
                        <OutlinedList
                            items={title.genres}
                            className="title-details__genres typography-4 color-light"
                        />
                        <p className="title-details__short-desc typography-4 color-light">
                            {title['short-desc']}
                        </p>
                    </div>
                    <div className="title-details__rating-container">
                        <RatingsList
                            className="title-details__rating-container typography-2 color-light"
                            userRatings={title.rating}
                            ageRating={title['age-rating']}
                        />
                    </div>
                </div>

                {title.directors && (
                    <>
                        <hr className="title-details__hr" />
                        <p className="title-details__director-writer">
                            <span className="typography-4 color-lightest">
                                Director
                            </span>
                            <BulletedList
                                items={title.directors}
                                component="span"
                                className="typography-4 color-light"
                            />
                        </p>
                    </>
                )}

                {title.writers && (
                    <>
                        <hr className="title-details__hr" />
                        <p className="title-details__director-writer">
                            <span className="typography-4 color-lightest">
                                Writers
                            </span>
                            <BulletedList
                                items={title.writers}
                                component="span"
                                className="typography-4 color-light"
                            />
                        </p>
                    </>
                )}

                {title['streaming-on'] && (
                    <div className="title-details__streaming-container">
                        <h3 className="typography-3 color-lightest">
                            Streaming on
                        </h3>
                        <StreamingServicesList
                            className="title-details__streaming-list"
                            list={title['streaming-on']}
                        />
                    </div>
                )}

                {title.casts && (
                    <div className="title-details__casts-container">
                        <h3 className="typography-3 color-lightest">Casts</h3>
                        <CastsList
                            className="title-details__cast-list"
                            list={title.casts}
                        />
                    </div>
                )}

                {title.story && (
                    <div className="title-details__story-container">
                        <h3 className="typography-3 color-lightest">
                            Storyline
                        </h3>
                        <p className="title-details__story typography-3 color-light">
                            {title.story}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TitlesDetails;
