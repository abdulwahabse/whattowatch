import playIcon from '/assets/icons/play.png';
import infoIcon from '/assets/icons/info.png';
import searchIcon from '/assets/icons/search.png';

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
        iconSrc = playIcon;
    } else if (props.icon === 'info') {
        iconSrc = infoIcon;
    } else if (props.icon === 'search') {
        iconSrc = searchIcon;
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
