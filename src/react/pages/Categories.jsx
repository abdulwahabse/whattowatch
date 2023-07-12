import { useEffect, useState } from 'react';
import { getCategoriesWithLinks } from '../../api/titlesAndUserFetcher';
import Category from '../components/common/Category';
import SectionHeading from '../components/section/SectionHeading';

function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            const categoriesFetched = await getCategoriesWithLinks();
            setCategories(categoriesFetched);
        })();
    }, []);

    const categoriesToRender = categories.map((category, index) => (
        <Category
            key={index}
            name={category.name}
            link={category.link}
            index={index}
        />
    ));

    return (
        <div className="categories">
            <div className="container">
                <SectionHeading className="categories__heading">
                    Browse by category
                </SectionHeading>
                <div className="categories__list-container">
                    {categoriesToRender}
                </div>
            </div>
        </div>
    );
}

export default Categories;
