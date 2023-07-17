import netflixIcon from '/assets/icons/netflix.png';
import huluIcon from '/assets/icons/hulu.jpg';
import disneyPlusIcon from '/assets/icons/disney-plus.png';
import primeVideoIcon from '/assets/icons/prime-video.png';
import hboMaxIcon from '/assets/icons/hbo-max.png';

function StreamingServicesList(props) {
    const { list } = props;

    const getIcon = (item) => {
        switch (item) {
            case 'netflix':
                return netflixIcon;
            case 'hulu':
                return huluIcon;
            case 'disney-plus':
                return disneyPlusIcon;
            case 'amazon-prime-video':
                return primeVideoIcon;
            case 'hbo-max':
                return hboMaxIcon;
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
