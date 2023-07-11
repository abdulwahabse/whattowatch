import Title from './Title';
import TitleSm from './TitleSm';

function TitleNumbered(props) {
    // const numberStyle = `title-numbered__number ${
    //     props.number > 9 ? 'title-numbered__number--double-digit' : ''
    // }`;

    const titleStyle = `title-numbered ${
        props.number > 9 ? 'title-numbered--double-digit' : ''
    }`;
    return (
        <div className={titleStyle}>
            <span className="title-numbered__number">{props.number}</span>
            <TitleSm
                className="title-numbered__title"
                {...props}
                isRounded={true}
            />
        </div>
    );
}

export default TitleNumbered;
