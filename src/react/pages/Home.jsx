import { useEffect, useState } from 'react';
import SectionNumberedTitlesList from './../components/section/SectionNumberedTitlesList';
import SectionTitlesList from '../components/section/SectionTitlesList';
import {
    getCategoriesWithLinks,
    getTop10Today,
    getTopChartsMovies,
    getTopChartsTVShows,
    getTitlesByGenre,
    getTitlesByPlatform,
} from '../../api/titlesAndUserFetcher';
import SectionCategories from '../components/section/SectionCategories';
import SectionPlatform from '../components/section/SectionPlatform';

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
        netflix: [],
    });
    const [categories, setCategories] = useState([]);

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
            const netflix = await getTitlesByPlatform('netflix');

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
                netflix,
            });
        })();
    }, []);

    return (
        <div className="home">
            <div className="container">
                {titles.top10Today.length > 0 && (
                    <SectionNumberedTitlesList
                        heading="Top 10 today 🔥"
                        titles={titles.top10Today}
                    />
                )}

                {titles.family.length > 0 && (
                    <SectionTitlesList
                        heading="Family 👪"
                        titles={titles.family}
                        link="/categories/family"
                    />
                )}

                {titles.fantasy.length > 0 && (
                    <SectionTitlesList
                        heading="Fantasy 🧙‍♂️"
                        link="/categories/fantasy"
                        titles={titles.fantasy}
                    />
                )}

                {titles.drama.length > 0 && (
                    <SectionTitlesList
                        heading="Drama 🎭"
                        link="/categories/drama"
                        titles={titles.drama}
                    />
                )}

                {titles.scifi.length > 0 && (
                    <SectionTitlesList
                        heading="Sci-Fi 🤖"
                        link="/categories/sci-fi"
                        titles={titles.scifi}
                    />
                )}

                {titles.thriller.length > 0 && (
                    <SectionTitlesList
                        heading="Thriller 🔪"
                        link="/categories/thriller"
                        titles={titles.thriller}
                    />
                )}

                {titles.topChartsMovies.length > 0 && (
                    <SectionTitlesList
                        heading="Top Chart: Movies 🎬"
                        titles={titles.topChartsMovies}
                    />
                )}
                {titles.topChartsTVShows.length > 0 && (
                    <SectionTitlesList
                        heading="Top Chart: TV Shows 📺"
                        titles={titles.topChartsTVShows}
                    />
                )}
                <SectionCategories
                    heading="Browse by category"
                    categories={categories}
                />
            </div>
            {titles.netflix.length > 0 && (
                <SectionPlatform titles={titles.netflix} platform="netflix" />
            )}
        </div>
    );
}

export default Home;
