import { useParams } from 'react-router-dom';
import { getCelebrityByName } from '../../api/titlesAndUserFetcher';
import Avatar from './../components/common/Avatar';
import SectionHeading from './../components/section/SectionHeading';
import Title from '../components/common/Title';
import BackButton from './../components/common/BackButton';

function Celebrity() {
    const { name } = useParams();
    const celebrityDetails = getCelebrityByName(name);
    console.log('celebrityDetails', celebrityDetails);
    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    };

    const titlesToRender = celebrityDetails.appearedIn.map((title, index) => (
        <Title {...title} key={index} />
    ));
    return (
        <div className="celebrity container">
            <BackButton />
            <SectionHeading className="celebrity__heading">
                Celebrity
            </SectionHeading>
            <div className="celebrity__info">
                <Avatar src={celebrityDetails.info.picture} size="lg" />
                <p className="typography-2 color-lightest celebrity__name">
                    {celebrityDetails.info.name}
                </p>
            </div>

            <h3 className="typography-2 color-light celebrity__heading">
                Overview
            </h3>
            <div className="celebrity__overview-container">
                {celebrityDetails.info.dob && (
                    <>
                        <p className="typography-3 color-lightest celebrity__overview">
                            <span className="typography-4 color-lightest">
                                Age:{' '}
                            </span>
                            <span className="typography-4 color-light">
                                {calculateAge(celebrityDetails.info.dob)} years
                                old
                            </span>
                        </p>
                        <hr className="celebrity__overview-separator" />
                    </>
                )}

                {celebrityDetails.info.birthplace && (
                    <>
                        <p className="typography-3 color-lightest celebrity__overview">
                            <span className="typography-4 color-lightest">
                                Birthplace:{' '}
                            </span>
                            <span className="typography-4 color-light">
                                {celebrityDetails.info.birthplace}
                            </span>
                        </p>
                        <hr className="celebrity__overview-separator" />
                    </>
                )}

                {celebrityDetails.info.height && (
                    <>
                        <p className="typography-3 color-lightest celebrity__overview">
                            <span className="typography-4 color-lightest">
                                Height:{' '}
                            </span>
                            <span className="typography-4 color-light">
                                {celebrityDetails.info.height}
                            </span>
                        </p>
                    </>
                )}
            </div>

            <h3 className="typography-2 color-light celebrity__heading">
                Appeared In
            </h3>
            <div className="celebrity__titles">{titlesToRender}</div>
        </div>
    );
}

export default Celebrity;
