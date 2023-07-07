import SectionHeading from './SectionHeading';
import Title from '../common/Title';
import ScrollingList from '../common/ScrollingList';

function SectionTitlesList(props) {
    const { heading } = props;
    const titles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <section className="section-titles-list">
            <SectionHeading
                className="section-titles-list__heading"
                showArrow={true}
            >
                {heading}
            </SectionHeading>

            <ScrollingList component={Title}>{titles}</ScrollingList>
        </section>
    );
}

export default SectionTitlesList;
