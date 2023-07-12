import Category from '../common/Category';
import ScrollingList from '../common/ScrollingList';
import SectionHeading from './SectionHeading';

function SectionCategories(props) {
    const { heading, categories } = props;
    const categoriesToRender = categories.map((category, index) => (
        <Category
            key={index}
            name={category.name}
            link={category.link}
            index={index}
        />
    ));
    return (
        <div className="section-categories">
            <SectionHeading className="section-categories__heading">
                {heading}
            </SectionHeading>
            <ScrollingList component={Category}>{categories}</ScrollingList>
        </div>
    );
}

export default SectionCategories;
