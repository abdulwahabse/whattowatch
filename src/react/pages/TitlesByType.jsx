import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    getTop10TVShowsToday,
    getTVShowsByGenre,
    getHighestRatedTVShows,
    getTop10MoviesToday,
    getMoviesByGenre,
    getHighestRatedMovies,
} from '../../api/titlesAndUserFetcher';
import YouTubeModel from '../components/common/YouTubeModel';
import SectionNumberedTitlesList from '../components/section/SectionNumberedTitlesList';
import SectionTitlesList from '../components/section/SectionTitlesList';

function TitlesByType(props) {
    const { type } = useParams();
    const [titles, setTitles] = useState({
        type: type,
        typeHeading: type === 'tvshows' ? 'TV Shows' : 'Movies',
        top10: [],
        crime: [],
        fantasy: [],
        drama: [],
        highestRated: [],
        family: [],
        scifi: [],
        thriller: [],
    });
    const [trailerModel, setTrailerModel] = useState({
        show: false,
        url: '',
    });

    const getTitlesByType = async (type) => {
        let top10 = [],
            crime = [],
            fantasy = [],
            drama = [],
            highestRated = [],
            family = [],
            scifi = [],
            thriller = [];
        if (type.toLowerCase() === 'tvshows') {
            top10 = getTop10TVShowsToday();
            crime = getTVShowsByGenre('Crime');
            fantasy = getTVShowsByGenre('Fantasy');
            drama = getTVShowsByGenre('Drama');
            highestRated = getHighestRatedTVShows().splice(0, 10);
            thriller = getTVShowsByGenre('Thriller');
        } else {
            top10 = getTop10MoviesToday();
            family = getMoviesByGenre('Family');
            fantasy = getMoviesByGenre('Fantasy');
            drama = getMoviesByGenre('Drama');
            highestRated = getHighestRatedMovies().splice(0, 10);
            scifi = getMoviesByGenre('Sci-Fi');
        }
        return {
            type,
            top10,
            crime,
            fantasy,
            drama,
            highestRated,
            family,
            scifi,
            thriller,
        };
    };

    useEffect(() => {
        (async () => {
            const titlesFetched = await getTitlesByType(titles.type);
            setTitles((prevState) => ({ ...prevState, ...titlesFetched }));
            console.log('TitlesByType', titlesFetched);
        })();
    }, [type]);

    return (
        <div className="titles-by-type">
            {trailerModel.show && (
                <YouTubeModel
                    show={trailerModel.show}
                    setShow={(value) =>
                        setTrailerModel((prevState) => ({
                            ...prevState,
                            show: value,
                        }))
                    }
                    url={trailerModel.url}
                />
            )}
            <div className="container">
                {titles.top10.length > 0 && (
                    <SectionNumberedTitlesList
                        heading={`Top 10 ${titles.typeHeading} today 🔥`}
                        titles={titles.top10}
                        setShowTrailerModel={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                show: value,
                            }))
                        }
                        setTrailerUrl={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                url: value,
                            }))
                        }
                    />
                )}

                {titles.scifi.length > 0 && (
                    <SectionTitlesList
                        heading={`Sci-Fi ${titles.typeHeading} 🤖`}
                        link="/categories/sci-fi"
                        titles={titles.scifi}
                        setShowTrailerModel={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                show: value,
                            }))
                        }
                        setTrailerUrl={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                url: value,
                            }))
                        }
                    />
                )}

                {titles.family.length > 0 && (
                    <SectionTitlesList
                        heading={`Family ${titles.typeHeading} 👨‍👩‍👧‍👦`}
                        link="/categories/family"
                        titles={titles.family}
                        setShowTrailerModel={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                show: value,
                            }))
                        }
                        setTrailerUrl={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                url: value,
                            }))
                        }
                    />
                )}

                {titles.drama.length > 0 && (
                    <SectionTitlesList
                        heading={`Drama ${titles.typeHeading} 🎭`}
                        link="/categories/drama"
                        titles={titles.drama}
                        setShowTrailerModel={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                show: value,
                            }))
                        }
                        setTrailerUrl={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                url: value,
                            }))
                        }
                    />
                )}

                {titles.fantasy.length > 0 && (
                    <SectionTitlesList
                        heading={`Fantasy ${titles.typeHeading} 🧙‍♂️`}
                        link="/categories/fantasy"
                        titles={titles.fantasy}
                        setShowTrailerModel={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                show: value,
                            }))
                        }
                        setTrailerUrl={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                url: value,
                            }))
                        }
                    />
                )}

                {titles.crime.length > 0 && (
                    <SectionTitlesList
                        heading={`Crime ${titles.typeHeading} 🕵️‍♂️`}
                        link="/categories/crime"
                        titles={titles.crime}
                        setShowTrailerModel={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                show: value,
                            }))
                        }
                        setTrailerUrl={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                url: value,
                            }))
                        }
                    />
                )}

                {titles.thriller.length > 0 && (
                    <SectionTitlesList
                        heading={`Thriller ${titles.typeHeading} 🔪`}
                        link="/categories/thriller"
                        titles={titles.thriller}
                        setShowTrailerModel={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                show: value,
                            }))
                        }
                        setTrailerUrl={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                url: value,
                            }))
                        }
                    />
                )}

                {titles.highestRated.length > 0 && (
                    <SectionNumberedTitlesList
                        heading={`Highest Rated ${titles.typeHeading} 🏆`}
                        titles={titles.highestRated}
                        setShowTrailerModel={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                show: value,
                            }))
                        }
                        setTrailerUrl={(value) =>
                            setTrailerModel((prevState) => ({
                                ...prevState,
                                url: value,
                            }))
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default TitlesByType;
