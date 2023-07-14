import { useEffect, useState } from 'react';
import { getImageUrl } from '../../../utils/utils';
import { capitalizeFirstLetter } from './../../../utils/utils';
import SectionTitlesList from './SectionTitlesList';
import SectionHeading from './SectionHeading';
import ScrollingList from '../common/ScrollingList';
import TitleSm from '../common/TitleSm';

function SectionPlatform(props) {
    const { titles, platform } = props;
    const [images, setImages] = useState({
        icon: '',
        background: '',
    });

    useEffect(() => {
        switch (platform) {
            case 'netflix':
                setImages({
                    icon: getImageUrl('assets/icons/netflix.png'),
                    background: getImageUrl(
                        'assets/images/backgrounds/netflix-cover.jpg'
                    ),
                });
                break;
            case 'amazon-prime-video':
                setImages({
                    icon: getImageUrl('assets/icons/prime-video.png'),
                });
                break;
            case 'disney-plus':
                setImages({
                    icon: getImageUrl('assets/icons/disney-pllus.png'),
                });
                break;
            case 'hulu':
                setImages({
                    icon: getImageUrl('assets/icons/hulu.png'),
                });
                break;
            case 'hbo-max':
                setImages({
                    icon: getImageUrl('assets/icons/hbo-max.png'),
                });
                break;
            default:
                setImages({
                    icon: getImageUrl('assets/icons/netflix.png'),
                });
                break;
        }
    }, [platform]);

    return (
        <section
            className="section-platform"
            style={{
                backgroundImage: `url(${images.background})`,
            }}
        >
            <div className="section-platform__container container">
                <img
                    src={images.icon}
                    alt={platform}
                    className="section-platform__icon"
                />

                <SectionHeading
                    className="section-platform__heading"
                    showArrow={false}
                >
                    {'Popular on ' + capitalizeFirstLetter(platform)}
                </SectionHeading>

                <ScrollingList
                    component={TitleSm}
                    speed="5"
                    distance="1000"
                    isRounded={true}
                    {...props}
                >
                    {titles}
                </ScrollingList>
            </div>
        </section>
    );
}

export default SectionPlatform;
