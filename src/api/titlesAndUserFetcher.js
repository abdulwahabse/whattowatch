import Data from './data.json';

// change body to fetch relevant data
export const getTop10Today = () => Data.data.titles;

export const getTopChartsMovies = () => getTop10Today();

export const getTopChartsTVShows = () => getTop10Today();

export const getTitle = (id) =>
    Data.data.titles.find((title) => title.id === id);
