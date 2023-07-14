import Data from './data.json';

// Helper function to get random elements from an array
function getRandomElements(array, count) {
    const shuffled = array.slice();
    let i = array.length;
    let temp, randomIndex;
    while (i--) {
        randomIndex = Math.floor((i + 1) * Math.random());
        temp = shuffled[randomIndex];
        shuffled[randomIndex] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, count);
}

// change body to fetch relevant data
export const getTop10Today = () => {
    const titles = Data.data.titles;
    const top10Today = getRandomElements(titles, 10);
    return top10Today;
};

export const getTopChartsMovies = () => getHighestRatedMovies();

export const getTopChartsTVShows = () => getHighestRatedTVShows();

const getTVShows = () =>
    Data.data.titles.filter(
        (title) => title.type.toLowerCase() === 'tv series'
    );

export const getTop10TVShowsToday = () => {
    const tvShows = getTVShows();
    const top10TVShowsToday = getRandomElements(tvShows, 10);
    return top10TVShowsToday;
};

export const getTVShowsByGenre = (genre) => {
    const tvShows = getTVShows();
    const tvShowsByGenre = tvShows.filter((tvShow) => {
        return tvShow.genres.some(
            (tvShowGenre) => tvShowGenre.toLowerCase() === genre.toLowerCase()
        );
    });
    return tvShowsByGenre;
};

export const getHighestRatedTVShows = (genre) => {
    const tvShows = getTVShows();
    const highestRatedTVShows = tvShows.sort((a, b) => {
        return b.rating - a.rating;
    });
    return highestRatedTVShows;
};

export const getMovies = () =>
    Data.data.titles.filter((title) => title.type.toLowerCase() === 'movie');

export const getMoviesByGenre = (genre) => {
    const movies = getMovies();
    const moviesByGenre = movies.filter((movie) => {
        return movie.genres.some(
            (movieGenre) => movieGenre.toLowerCase() === genre.toLowerCase()
        );
    });
    return moviesByGenre;
};

export const getHighestRatedMovies = (genre) => {
    const movies = getMovies();
    const highestRatedMovies = movies.sort((a, b) => {
        return b.rating - a.rating;
    });
    return highestRatedMovies;
};

export const getTop10MoviesToday = () => {
    const movies = getMovies();
    const top10MoviesToday = getRandomElements(movies, 10);
    return top10MoviesToday;
};

export const getTitle = (id) =>
    Data.data.titles.find((title) => title.id === id);

export const getTitlesByGenre = (genre) => {
    const titles = Data.data.titles.filter((title) => {
        return title.genres.some(
            (titleGenre) => titleGenre.toLowerCase() === genre.toLowerCase()
        );
    });
    return titles;
};

export const getCategories = () => Data.data.categories;

export const getCategoriesWithLinks = () => {
    const categories = getCategories();
    const basicLink = '/categories/';
    const categoriesWithLinks = categories.map((category) => {
        return {
            name: category,
            link: basicLink + category.toLowerCase().replaceAll(' ', '%20'),
        };
    });
    return categoriesWithLinks;
};

export const getTitlesByCategory = (category) => {
    const lowercaseCategory = category.toLowerCase();
    const titles = Data.data.titles.filter((title) => {
        return title.genres.some(
            (genre) => genre.toLowerCase() === lowercaseCategory
        );
    });
    return titles;
};

export const searchTitles = (searchString) => {
    const lowercaseSearchString = searchString.toLowerCase();
    const titles = Data.data.titles.filter((title) => {
        const lowercaseTitleName = title.name.toLowerCase();
        return lowercaseTitleName.includes(lowercaseSearchString);
    });
    return titles;
};

export const getCelebrityByName = (name) => {
    const celebrity = {
        info: {},
        appearedIn: [],
    };

    for (const title of Data.data.titles) {
        for (const cast of title.casts) {
            if (cast.name.toLowerCase() === name.toLowerCase()) {
                if (Object.keys(celebrity.info).length === 0) {
                    celebrity.info = cast;
                }
                celebrity.appearedIn.push(title);
            }
        }
    }

    return celebrity;
};
