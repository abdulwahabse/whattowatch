import { getImageUrl } from '../../../utils/utils';

function Avatar(props) {
    const { alt, src, link, size, children } = props;
    let child = null;
    let sizeClass = '';

    if (src) {
        child = <img className="avatar--img" src={src} alt={alt} />;
    } else if (children) {
        child = <p className="avatar--text">{children}</p>;
    } else {
        const defaultAvatar = getImageUrl('assets/icons/user.png');
        child = <img className="avatar--img" src={defaultAvatar} alt="user" />;
    }

    if (size === 'sm') {
        sizeClass = 'avatar--sm';
    } else if (size === 'md') {
        sizeClass = 'avatar--md';
    }

    return (
        <a className="avatar--link" href={link || '#'}>
            <div className={`avatar ${sizeClass}`}>{child}</div>
        </a>
    );
}

export default Avatar;
