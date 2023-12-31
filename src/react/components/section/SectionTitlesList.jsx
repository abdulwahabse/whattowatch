import SectionHeading from './SectionHeading';
import Title from '../common/Title';
import ScrollingList from '../common/ScrollingList';

function SectionTitlesList(props) {
    const { heading, titles } = props;

    return (
        <section className="section-titles-list">
            <SectionHeading
                className={`section-titles-list__heading ${props.headingClassName}`}
                link={props.link}
            >
                {heading}
            </SectionHeading>

            <ScrollingList component={Title} {...props}>
                {titles}
            </ScrollingList>
        </section>
    );
}

export default SectionTitlesList;
