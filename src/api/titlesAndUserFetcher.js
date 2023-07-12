import Data from './data.json';

// change body to fetch relevant data
export const getTop10Today = () => Data.data.titles.slice(0, 10);

export const getTopChartsMovies = () => getTop10Today();

export const getTopChartsTVShows = () => getTop10Today();

export const getTitle = (id) =>
    Data.data.titles.find((title) => title.id === id);

export const getCategories = () => Data.data.categories;

export const getCategoriesWithLinks = () => {
    const categories = getCategories();
    const basicLink = '/categories/';
    const categoriesWithLinks = categories.map((category) => {
        return {
            name: category,
            link: basicLink + category.toLowerCase().replaceAll(' ', '-'),
        };
    });
    return categoriesWithLinks;
};
