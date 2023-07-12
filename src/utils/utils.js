export function getImageUrl(path) {
    path = '/' + path;
    return new URL(path, import.meta.url).href;
}

export function convertToYouTubeEmbeddedUrl(url) {
    if (!url) {
        return '';
    }
    const videoId = url.split('https://youtu.be/')[1];
    const embeddedUrl =
        'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    return embeddedUrl;
}

// encode spaces in url
export function encodeSpacesInUrl(url) {
    return url.replaceAll(' ', '%20');
}

// decode spaces in url
export function decodeSpacesInUrl(url) {
    return url.replaceAll('%20', ' ');
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
