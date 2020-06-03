import React, { useEffect, useState } from 'react';
import ListOfMovies from '../../components/ListOfMovies/ListOfMovies';
import Search from '../../components/Search/Search';
import { fetchDiscoverList, fetchSearchMovie } from '../../api/TMDB';
import Styles from './MovieContainer.module.css';
import Rating from '../../components/Rating/Rating';
const MovieContainer = () => {

    // 2 Lists to avoid fetching data again when query search is empty.
    const [movieList, setMovieList] = useState([]);
    const [discoverList, setDiscoverList] = useState([]);

    const sortByPopularity = (movieList) => {
        return movieList.sort(function (a, b) {
            return b.popularity - a.popularity;
        });
    }

    const changeFilterRate = (value) => {
        const rateRange = [
            [0, 2],
            [2, 4],
            [4, 6],
            [6, 8],
            [8, 10]
        ];
        const actualRange = rateRange[value - 1];
        const filteredMovieList = movieList.filter((movie) => {
            return movie.vote_average > actualRange[0] && movie.vote_average <= actualRange[1];
        })
        setMovieList(filteredMovieList);
    }

    const getDiscoverList = async () => {
        const fetchedDisoverList = await fetchDiscoverList();
        const fetchedSortedDiscoverList = sortByPopularity(fetchedDisoverList.results);
        setDiscoverList(fetchedSortedDiscoverList);
        setMovieList(fetchedSortedDiscoverList);
    }

    const searchMovie = async (query) => {
        if (query === '') {
            setMovieList(discoverList);
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
            <Rating changeFilterRate={changeFilterRate} />
            <ListOfMovies movieList={movieList} />
        </div>
    )
}

export default MovieContainer;
