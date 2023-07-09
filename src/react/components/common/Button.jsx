import { getImageUrl } from '../../../utils/utils';

function Button(props) {
    let btnClasses = `button button--${props.color} ${props.className}`;
    let iconClasses = 'button__icon';
    let iconSrc = null;

    if (props.full) {
        btnClasses += ' button--full';
    }

    if (props.size === 'sm') {
        btnClasses += ' button--sm';
    }

    if (props.children !== undefined) {
        iconClasses += ' button__icon-mr';
    }

    if (props.icon === 'play') {
        iconSrc = getImageUrl('assets/icons/play.png');
    } else if (props.icon === 'info') {
        iconSrc = getImageUrl('assets/icons/info.png');
    } else if (props.icon === 'search') {
        iconSrc = getImageUrl('assets/icons/search.png');
    }
    return (
        <button
            className={btnClasses}
            style={props.style}
            onClick={props.onClick}
        >
            {iconSrc && <img src={iconSrc} className={iconClasses} />}
            {props.children}
        </button>
    );
}

export default Button;
