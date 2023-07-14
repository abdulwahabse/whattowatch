import { useEffect, useState } from 'react';
import SectionNumberedTitlesList from './../components/section/SectionNumberedTitlesList';
import SectionTitlesList from '../components/section/SectionTitlesList';
import {
    getCategoriesWithLinks,
    getTop10Today,
    getTopChartsMovies,
    getTopChartsTVShows,
    getTitlesByGenre,
} from '../../api/titlesAndUserFetcher';
import YouTubeModel from '../components/common/YouTubeModel';
import SectionCategories from '../components/section/SectionCategories';

function Home() {
    const [titles, setTitles] = useState({
        top10Today: [],
        topChartsMovies: [],
        topChartsTVShows: [],
        family: [],
        fantasy: [],
        drama: [],
        scifi: [],
        thriller: [],
    });
    const [categories, setCategories] = useState([]);
    const [trailerModel, setTrailerModel] = useState({
        show: false,
        url: '',
    });

    useEffect(() => {
        (async () => {
            const categoriesFetched = await getCategoriesWithLinks();
            const top10Today = await getTop10Today();
            const topChartsMovies = await getTopChartsMovies();
            const topChartsTVShows = await getTopChartsTVShows();
            const family = await getTitlesByGenre('Family');
            const fantasy = await getTitlesByGenre('Fantasy');
            const drama = await getTitlesByGenre('Drama');
            const scifi = await getTitlesByGenre('Sci-Fi');
            const thriller = await getTitlesByGenre('Thriller');

            setCategories(categoriesFetched);
            setTitles({
                top10Today,
                topChartsMovies,
                topChartsTVShows,
                family,
                fantasy,
                drama,
                scifi,
                thriller,
            });
        })();
    }, []);

    return (
        <div className="home">
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
                {titles.top10Today.length > 0 && (
                    <SectionNumberedTitlesList
                        heading="Top 10 today 🔥"
                        titles={titles.top10Today}
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
                        heading="Family 👪"
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

                {titles.fantasy.length > 0 && (
                    <SectionTitlesList
                        heading="Fantasy 🧙‍♂️"
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

                {titles.drama.length > 0 && (
                    <SectionTitlesList
                        heading="Drama 🎭"
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

                {titles.scifi.length > 0 && (
                    <SectionTitlesList
                        heading="Sci-Fi 🤖"
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

                {titles.thriller.length > 0 && (
                    <SectionTitlesList
                        heading="Thriller 🔪"
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

                {titles.topChartsMovies.length > 0 && (
                    <SectionTitlesList
                        heading="Top Chart: Movies 🎬"
                        titles={titles.topChartsMovies}
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
                {titles.topChartsTVShows.length > 0 && (
                    <SectionTitlesList
                        heading="Top Chart: TV Shows 📺"
                        titles={titles.topChartsTVShows}
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
                <SectionCategories
                    heading="Browse by category"
                    categories={categories}
                />
            </div>
        </div>
    );
}

export default Home;
