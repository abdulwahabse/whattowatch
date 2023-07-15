import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SectionHeading from '../components/section/SectionHeading';
import {
    getTitlesByCategory,
    searchTitles,
    searchData,
} from '../../api/titlesAndUserFetcher';
import {
    decodeSpacesInUrl,
    capitalizeFirstLetter,
    encodeSpacesInUrl,
} from '../../utils/utils';
import Title from '../components/common/Title';
import BackButton from '../components/common/BackButton';
import Avatar from './../components/common/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Titles() {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');
    const { category, type, query } = useParams();
    let heading = '';
    let listsToRender = [];
    let noResultsText = 'No results found';

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    const mapTitles = (titles) =>
        titles.map((title, index) => <Title {...title} key={index} />);

    const mapCelebrities = (celebrities) =>
        celebrities.map((celebrity, index) => (
            <div key={index}>
                <Link
                    to={`/celebrities/${encodeSpacesInUrl(celebrity.name)}`}
                    className="titles__link"
                >
                    <Avatar size="lg" src={celebrity.picture} />
                    <p className="titles__celebrity-name typography-3 color-light">
                        {celebrity.name}
                    </p>
                </Link>
            </div>
        ));

    if (currentPath === '/watchlist') {
        heading = 'Watchlist';
        noResultsText = 'Your watchlist is empty';
    } else if (currentPath.includes('/categories/')) {
        const decodedCategory = decodeSpacesInUrl(category);
        heading = `${capitalizeFirstLetter(decodedCategory)} titles`;
        const titles = getTitlesByCategory(category);
        listsToRender = mapTitles(titles);
    } else if (currentPath.includes('/search/')) {
        const results = searchData(type, query);
        if (type === 'movies' || type === 'series') {
            listsToRender = mapTitles(results);
        } else {
            listsToRender = mapCelebrities(results);
        }

        heading = `Search results for "${query}"`;
    }

    return (
        <div className="titles">
            <div className="container">
                <BackButton />
                <SectionHeading className="titles__heading">
                    {heading}
                </SectionHeading>
                <div className="titles__list-container">
                    {listsToRender.length === 0 ? (
                        <p className="titles__no-result typography-3 color-light">
                            {noResultsText}
                        </p>
                    ) : (
                        listsToRender
                    )}
                </div>
            </div>
        </div>
    );
}

export default Titles;
