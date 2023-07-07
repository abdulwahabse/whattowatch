import Title from './Title';

function TitleNumbered(props) {
    return (
        <div className="title-numbered">
            <span className="title-numbered__number">{props.number}</span>
            <Title className="title-numbered__title" />
        </div>
    );
}

export default TitleNumbered;
