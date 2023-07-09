import Model from './Model';
import { convertToYouTubeEmbeddedUrl } from '../../../utils/utils';

function YouTubeModel(props) {
    const url = convertToYouTubeEmbeddedUrl(props.url);
    console.log(url);

    return (
        <Model show={props.show} setShow={props.setShow} size="lg">
            <iframe
                width="100%"
                height="100%"
                src={url}
                allow="autoplay; fullscreen; encrypted-media"
                frameBorder="0"
                allowfullscreen
            ></iframe>
        </Model>
    );
}

export default YouTubeModel;
