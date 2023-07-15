import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getImageUrl } from '../../../utils/utils';

function Avatar(props) {
    const { alt, src, link, size, children } = props;
    let child = null;
    let sizeClass = '';

    if (src) {
        child = <img className="avatar__img" src={src} alt={alt} />;
    } else if (children) {
        child = <p className="avatar__text">{children}</p>;
    } else {
        const defaultAvatar = getImageUrl('assets/icons/user.png');
        child = <img className="avatar__img" src={defaultAvatar} alt="user" />;
    }

    if (size === 'sm') {
        sizeClass = 'avatar--sm';
    } else if (size === 'md') {
        sizeClass = 'avatar--md';
    } else if (size === 'lg') {
        sizeClass = 'avatar--lg';
    }

    return (
        <Link className="avatar__link" to={link || '/'}>
            <div className={`avatar ${sizeClass}`}>{child}</div>
        </Link>
    );
}

export default Avatar;
