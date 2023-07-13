import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCelebrityByName } from '../../api/titlesAndUserFetcher';
import Avatar from './../components/common/Avatar';
import SectionHeading from './../components/section/SectionHeading';
import Title from '../components/common/Title';
import YouTubeModel from '../components/common/YouTubeModel';
import BackButton from './../components/common/BackButton';

function Celebrity() {
    const { name } = useParams();
    console.log('name', name);
    const celebrityDetails = getCelebrityByName(name);
    console.log('celebrity', celebrityDetails);
    const [trailerModel, setTrailerModel] = useState({
        show: false,
        url: '',
    });
    const titlesToRender = celebrityDetails.appearedIn.map((title, index) => (
        <Title
            {...title}
            key={index}
            setShowTrailerModel={(value) =>
                setTrailerModel((prevState) => ({
                    ...prevState,
                    show: value,
                }))
            }
            setTrailerUrl={(value) =>
                setTrailerModel((prevState) => ({
                    ...prevState,
                    url: value,
                }))
            }
        />
    ));
    return (
        <div className="celebrity container">
            {trailerModel.show && (
                <YouTubeModel
                    show={trailerModel.show}
                    setShow={(value) =>
                        setTrailerModel((prevState) => ({
                            ...prevState,
                            show: value,
                        }))
                    }
                    url={trailerModel.url}
                />
            )}
            <BackButton />
            <SectionHeading>Celebrity</SectionHeading>
            <div className="celebrity__info">
                <Avatar src={celebrityDetails.info.picture} size="lg" />
                <p className="typography-3 color-light celebrity__name">
                    {celebrityDetails.info.name}
                </p>
            </div>
            <h3 className="typography-2 color-light">Appeared In</h3>
            <div className="celebrity__titles">{titlesToRender}</div>
        </div>
    );
}

export default Celebrity;
