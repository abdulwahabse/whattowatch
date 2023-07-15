import Category from '../common/Category';
import ScrollingList from '../common/ScrollingList';
import SectionHeading from './SectionHeading';

function SectionCategories(props) {
    const { heading, categories } = props;

    return (
        <div className="section-categories">
            <SectionHeading className="section-categories__heading">
                {heading}
            </SectionHeading>
            <ScrollingList component={Category} scrollable={true}>
                {categories}
            </ScrollingList>
        </div>
    );
}

export default SectionCategories;
