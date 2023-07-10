import { convertToYouTubeEmbeddedUrl } from '../../../utils/utils';

function YouTube(props) {
    const url = convertToYouTubeEmbeddedUrl(props.url);
    const isAutoPlay = props.isAutoPlay || false;
    return (
        <div className={'' || props.className}>
            <iframe
                width="100%"
                height="100%"
                src={url}
                allow={`${
                    isAutoPlay ? 'autoplay' : ''
                }; fullscreen; encrypted-media`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTube;
