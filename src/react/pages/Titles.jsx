import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SectionHeading from '../components/section/SectionHeading';
import {
    getTitlesByCategory,
    searchTitles,
} from '../../api/titlesAndUserFetcher';
import {
    encodeSpacesInUrl,
    decodeSpacesInUrl,
    capitalizeFirstLetter,
} from '../../utils/utils';
import Title from '../components/common/Title';
import YouTubeModel from '../components/common/YouTubeModel';
import BackButton from '../components/common/BackButton';

function Titles() {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');
    const { category, search } = useParams();
    let heading = '';
    let titlesToRender = [];
    let noResultsText = 'No results found';
    const [trailerModel, setTrailerModel] = useState({
        show: false,
        url: '',
    });

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    const mapTitles = (titles) =>
        titles.map((title, index) => (
            <Title
                {...title}
                key={index}
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
        ));

    if (currentPath === '/watchlist') {
        console.log('watchlist');
        heading = 'Watchlist';
        noResultsText = 'Your watchlist is empty';
        const titles = [];
    } else if (currentPath.includes('/categories/')) {
        const decodedCategory = decodeSpacesInUrl(category);
        heading = `${capitalizeFirstLetter(decodedCategory)} titles`;
        const titles = getTitlesByCategory(category);
        titlesToRender = mapTitles(titles);
        console.log(titlesToRender);
    } else if (currentPath.includes('/search/')) {
        const decodedSearch = decodeSpacesInUrl(search);
        heading = `Search results for "${decodedSearch}"`;
        const titles = searchTitles(decodedSearch);
        titlesToRender = mapTitles(titles);
    }

    return (
        <div className="titles">
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
                <BackButton />
                <SectionHeading className="titles__heading">
                    {heading}
                </SectionHeading>
                <div className="titles__list-container">
                    {titlesToRender.length === 0 ? (
                        <p className="titles__no-result typography-3 color-light">
                            {noResultsText}
                        </p>
                    ) : (
                        titlesToRender
                    )}
                </div>
            </div>
        </div>
    );
}

export default Titles;
