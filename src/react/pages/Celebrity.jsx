import { useParams } from 'react-router-dom';
import { getCelebrityByName } from '../../api/titlesAndUserFetcher';
import Avatar from './../components/common/Avatar';
import SectionHeading from './../components/section/SectionHeading';
import Title from '../components/common/Title';
import BackButton from './../components/common/BackButton';

function Celebrity() {
    const { name } = useParams();
    const celebrityDetails = getCelebrityByName(name);

    const titlesToRender = celebrityDetails.appearedIn.map((title, index) => (
        <Title {...title} key={index} />
    ));
    return (
        <div className="celebrity container">
            <BackButton />
            <SectionHeading>Celebrity</SectionHeading>
            <div className="celebrity__info">
                <Avatar src={celebrityDetails.info.picture} size="lg" />
                <p className="typography-2 color-lightest celebrity__name">
                    {celebrityDetails.info.name}
                </p>
            </div>
            <h3 className="typography-2 color-light">Appeared In</h3>
            <div className="celebrity__titles">{titlesToRender}</div>
        </div>
    );
}

export default Celebrity;
