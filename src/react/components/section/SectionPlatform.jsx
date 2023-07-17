import { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from './../../../utils/utils';
import SectionHeading from './SectionHeading';
import ScrollingList from '../common/ScrollingList';
import TitleSm from '../common/TitleSm';
import netflixIcon from '/assets/icons/netflix.png';
import netflixCover from '/assets/images/backgrounds/netflix-cover.jpg';
import primeVideoIcon from '/assets/icons/prime-video.png';
import disneyPlusIcon from '/assets/icons/disney-plus.png';
import huluIcon from '/assets/icons/hulu.jpg';
import hboMaxIcon from '/assets/icons/hbo-max.png';

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
                    icon: netflixIcon,
                    background: netflixCover,
                });
                break;
            case 'amazon-prime-video':
                setImages({
                    icon: primeVideoIcon,
                });
                break;
            case 'disney-plus':
                setImages({
                    icon: disneyPlusIcon,
                });
                break;
            case 'hulu':
                setImages({
                    icon: huluIcon,
                });
                break;
            case 'hbo-max':
                setImages({
                    icon: hboMaxIcon,
                });
                break;
            default:
                setImages({
                    icon: netflixIcon,
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
