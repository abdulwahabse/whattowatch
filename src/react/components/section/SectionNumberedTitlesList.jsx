import SectionHeading from './SectionHeading';
import TitleNumbered from '../common/TitleNumbered';

function SectionNumberedTitlesList(props) {
    const { heading } = props;

    return (
        <section className="section-numbered-titles-list">
            <SectionHeading
                className="section-numbered-titles-list__heading"
                showArrow={true}
            >
                {heading}
            </SectionHeading>
            <TitleNumbered number={1} />
        </section>
    );
}

export default SectionNumberedTitlesList;
