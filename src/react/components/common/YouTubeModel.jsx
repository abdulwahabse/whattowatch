import { useEffect, useState } from 'react';
import Model from './Model';

import YouTube from './YouTube';

function YouTubeModel(props) {
    return (
        <Model show={props.show} setShow={props.setShow} size="lg">
            <YouTube
                url={props.url}
                className="youtube-model__youtube"
                isAutoPlay={true}
            />
        </Model>
    );
}

export default YouTubeModel;
