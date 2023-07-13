import Avatar from './Avatar';
import { encodeSpacesInUrl } from '../../../utils/utils';

function CastsList(props) {
    const { list } = props;

    const casts = list.map((cast, index) => {
        const link = `/celebrities/${encodeSpacesInUrl(cast.name)}`;
        return (
            <div className="casts-list__cast-container" key={index}>
                <Avatar
                    src={cast.picture}
                    alt={cast.name}
                    link={link}
                    size="lg"
                />
                <p className="casts-list__name typography-3 color-lighter">
                    {cast.name}
                </p>
                <p className="casts-list__role typography-4 color-light">
                    {cast.role}
                </p>
            </div>
        );
    });

    return <div className={`casts-list ${props.className}`}>{casts}</div>;
}

export default CastsList;
