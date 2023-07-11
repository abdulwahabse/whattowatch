import { useEffect, useState } from 'react';
import SectionNumberedTitlesList from './../components/section/SectionNumberedTitlesList';
import SectionTitlesList from '../components/section/SectionTitlesList';
import {
    getTop10Today,
    getTopChartsMovies,
    getTopChartsTVShows,
} from '../../api/titlesAndUserFetcher';
import YouTubeModel from '../components/common/YouTubeModel';
import SectionCategories from '../components/section/SectionCategories';

function Home() {
    const [trailerModel, setTrailerModel] = useState({
        show: false,
        url: '',
    });

    const top10Today = getTop10Today();
    const topChartsMovies = getTopChartsMovies();
    const topChartsTVShows = getTopChartsTVShows();

    console.log(top10Today);
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
                <SectionNumberedTitlesList
                    heading="Top 10 Movies today"
                    titles={top10Today}
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
                <SectionTitlesList
                    heading="Top Chart: Movies"
                    titles={topChartsMovies}
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

                <SectionCategories
                    heading="Browse by category"
                    categories={[
                        {
                            name: 'Action',
                            link: '/categories/action',
                        },
                        {
                            name: 'Adventure',
                            link: '/categories/adventure',
                        },
                        {
                            name: 'Comedy',
                            link: '/categories/comedy',
                        },
                        {
                            name: 'Crime',
                            link: '/categories/crime',
                        },
                        {
                            name: 'Drama',
                            link: '/categories/drama',
                        },
                        {
                            name: 'Fantasy',
                            link: '/categories/fantasy',
                        },
                        {
                            name: 'Horror',
                            link: '/categories/horror',
                        },
                        {
                            name: 'Mystery',
                            link: '/categories/mystery',
                        },
                        {
                            name: 'Romance',
                            link: '/categories/romance',
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default Home;
