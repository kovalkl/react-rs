export const getPageNumber = (url: string) => url.split('page=')[1].split('&')[0];
