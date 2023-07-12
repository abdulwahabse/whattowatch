import { getImageUrl } from '../../../utils/utils';

function StreamingServicesList(props) {
    const { list } = props;
    const netflixIcon = getImageUrl('assets/icons/netflix.png');
    const huluIcon = getImageUrl('assets/icons/hulu.jpg');
    const disneyIcon = getImageUrl('assets/icons/disney-plus.png');
    const primeIcon = getImageUrl('assets/icons/prime-video.png');
    const hboIcon = getImageUrl('assets/icons/hbo-max.png');

    const getIcon = (item) => {
        switch (item) {
            case 'netflix':
                return netflixIcon;
            case 'hulu':
                return huluIcon;
            case 'disney-plus':
                return disneyIcon;
            case 'amazon-prime-video':
                return primeIcon;
            case 'hbo-max':
                return hboIcon;
            default:
                return '';
        }
    };

    const getIconName = (item) => {
        switch (item) {
            case 'netflix':
                return 'Netflix';
            case 'hulu':
                return 'Hulu';
            case 'disney-plus':
                return 'Disney+';
            case 'amazon-prime-video':
                return 'Prime Video';
            case 'hbo-max':
                return 'HBO Max';
            default:
                return '';
        }
    };

    const listToRender = list.map((item, index) => {
        return (
            <div className="streaming-services__icon-container" key={index}>
                <img
                    className="streaming-services__icon"
                    src={getIcon(item)}
                    alt={item}
                />
                <span className="streaming-services__name color-light">
                    {getIconName(item)}
                </span>
            </div>
        );
    });

    console.log(listToRender);

    return (
        <div className="streaming-services">
            <div
                className={`streaming-services__list-container ${props.className}`}
            >
                {listToRender}
            </div>
        </div>
    );
}

export default StreamingServicesList;
