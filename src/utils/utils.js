export function getImageUrl(path) {
    path = '/' + path;
    return new URL(path, import.meta.url).href;
}

export function convertToYouTubeEmbeddedUrl(url) {
    const videoId = url.split('https://youtu.be/')[1];
    const embeddedUrl =
        'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    return embeddedUrl;
}
