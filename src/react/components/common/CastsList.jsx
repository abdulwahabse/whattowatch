import Avatar from './Avatar';

function CastsList(props) {
    const { list } = props;

    const casts = list.map((cast) => {
        const link = `celebrities/${cast.name}`;
        return (
            <div className="casts-list__cast-container" key={cast.id}>
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

    console.log(list);

    return <div className={`casts-list ${props.className}`}>{casts}</div>;
}

export default CastsList;
