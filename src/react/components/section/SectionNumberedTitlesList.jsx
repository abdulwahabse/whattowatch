import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import TitleNumbered from '../common/TitleNumbered';
import ScrollingList from '../common/ScrollingList';

function SectionNumberedTitlesList(props) {
    const { heading, titles } = props;

    const [isTablet, setIsTablet] = useState(
        window.matchMedia('(min-width: 37.56em)').matches
    );
    const [isDesktop, setIsDesktop] = useState(
        window.matchMedia('(min-width: 77.56em)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsTablet(window.matchMedia('(min-width: 37.56em)').matches);
            setIsDesktop(window.matchMedia('(min-width: 77.56em)').matches);
        });
    }, []);

    useEffect(() => {
        if (isTablet && !isDesktop) {
            // TABLET CONFIG
        } else if (isTablet && isDesktop) {
            // DESKTOP CONFIG
        }
    }, [isTablet, isDesktop]);

    return (
        <section className="section-numbered-titles-list">
            <SectionHeading
                className="section-numbered-titles-list__heading"
                showArrow={true}
            >
                {heading}
            </SectionHeading>
            <ScrollingList
                component={TitleNumbered}
                speed="5"
                distance="1000"
                {...props}
            >
                {titles}
            </ScrollingList>
            {/* <TitleNumbered number={1} /> */}
        </section>
    );
}

export default SectionNumberedTitlesList;
