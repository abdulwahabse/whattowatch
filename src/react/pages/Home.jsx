import { useEffect, useState } from 'react';
import SectionNumberedTitlesList from './../components/section/SectionNumberedTitlesList';
import SectionTitlesList from '../components/section/SectionTitlesList';
import {
    getCategoriesWithLinks,
    getTop10Today,
    getTopChartsMovies,
    getTopChartsTVShows,
} from '../../api/titlesAndUserFetcher';
import YouTubeModel from '../components/common/YouTubeModel';
import SectionCategories from '../components/section/SectionCategories';

function Home() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            const categoriesFetched = await getCategoriesWithLinks();
            setCategories(categoriesFetched);
        })();
    }, []);

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
                    categories={categories}
                />
            </div>
        </div>
    );
}

export default Home;
