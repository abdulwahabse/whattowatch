import { useState } from 'react';
import SectionNumberedTitlesList from './../components/section/SectionNumberedTitlesList';
import SectionTitlesList from '../components/section/SectionTitlesList';
import {
    getTop10Today,
    getTopChartsMovies,
    getTopChartsTVShows,
} from '../../api/titlesAndUserFetcher';
import YouTubeModel from '../components/common/YouTubeModel';

function Home() {
    const [showTrailerModel, setShowTrailerModel] = useState(false);
    const top10Today = getTop10Today();
    const topChartsMovies = getTopChartsMovies();
    const topChartsTVShows = getTopChartsTVShows();

    console.log(top10Today);
    return (
        <div className="home">
            {showTrailerModel && (
                <YouTubeModel
                    show={showTrailerModel}
                    setShow={(value) => setShowTrailerModel(value)}
                    url="https://youtu.be/5NYt1qirBWg"
                />
            )}
            <div className="container">
                <SectionNumberedTitlesList heading="Top 10 Movies today" />
                <SectionTitlesList
                    heading="Top Chart: Movies"
                    titles={topChartsMovies}
                    setShowTrailerModel={(value) => setShowTrailerModel(value)}
                />
            </div>
        </div>
    );
}

export default Home;
