import React, { useEffect, useState } from 'react';
import ListOfMovies from '../../components/ListOfMovies/ListOfMovies';
import Search from '../../components/Search/Search';
import { fetchDiscoverList, fetchSearchMovie } from '../../api/TMDB';
import Styles from './MovieContainer.module.css';
const MovieContainer = () => {

    // 2 Lists to avoid fetching data again when query search is empty.
    const [movieList, setMovieList] = useState([]);
    const [discoverList, setDiscoverList] = useState([]);

    const sortByPopularity = (movieList) => {
        return movieList.sort(function (a, b) {
            return b.popularity - a.popularity;
        });
    }

    const getDiscoverList = async () => {
        const fetchedDisoverList = await fetchDiscoverList();
        const fetchedSortedDiscoverList = sortByPopularity(fetchedDisoverList.results);
        setDiscoverList(fetchedSortedDiscoverList);
    }

    const searchMovie = async (query) => {
        if (query === '') {
            setMovieList([]);
        } else {
            const searchedMovieList = await fetchSearchMovie(query);
            const sortedSearchedMovieList = await sortByPopularity(searchedMovieList.results);
            setMovieList(sortedSearchedMovieList);
        }
    }

    useEffect(() => {
        getDiscoverList();
    }, [])

    return (
        <div className={Styles.MovieContainer}>
            <Search searchMovie={searchMovie} />
            <ListOfMovies movieList={movieList.length ? movieList : discoverList} />
        </div>
    )
}

export default MovieContainer;
