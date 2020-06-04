export const sortByPopularity = (movieList) => {
    return movieList.sort(function (a, b) {
        return b.popularity - a.popularity;
    });
}