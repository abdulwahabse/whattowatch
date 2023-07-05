export function getImageUrl(path) {
    path = '/' + path;
    return new URL(path, import.meta.url).href;
}
