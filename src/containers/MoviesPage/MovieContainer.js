import React, { useEffect, useState } from 'react';
import ListOfMovies from '../../components/ListOfMovies/ListOfMovies';
import Search from '../../components/Search/Search';
import { fetchDiscoverList, fetchSearchMovie } from '../../api/TMDB';
import Styles from './MovieContainer.module.css';
import Rating from '../../components/Rating/Rating';
import ModalMovieDetails from '../../components/ModalMovieDetails/ModalMovieDetails';
import { sortByPopularity } from '../../utils/movieUtils';

const MovieContainer = () => {

    // Two Lists to avoid fetching data again when query search is empty.
    const [movieList, setMovieList] = useState([]);
    const [discoverList, setDiscoverList] = useState([]);

    // State to save filtered movies, avoiding changing movieList, it will enable
    // the search of movieList again instead of filtering what was already filtered.
    const [filteredMovieList, setFilteredMovieList] = useState([]);
    const [actualRate, setActualRate] = useState(-1);
    const [movieDetails, setMovieDetails] = useState(null);

    const changeFilterRate = (value) => {
        //Disable filter
        if (value === actualRate) {
            setActualRate(-1);
            setFilteredMovieList([]);

        } else {
            setActualRate(value);
            const rateRange = [
                [0, 2],
                [2, 4],
                [4, 6],
                [6, 8],
                [8, 10]
            ];
            const actualRange = rateRange[value - 1];
            const filteredMovieList = movieList.filter((movie) => {
                return movie.vote_average >= actualRange[0] && movie.vote_average < actualRange[1];
            })
            setFilteredMovieList(!filteredMovieList.length ? [-1] : filteredMovieList);
        }
    }

    const openMovieDetails = (movie) => {
        setMovieDetails(movie);
    }

    const getDiscoverList = async () => {
        const fetchedDisoverList = await fetchDiscoverList();
        const fetchedSortedDiscoverList = sortByPopularity(fetchedDisoverList.results);
        setDiscoverList(fetchedSortedDiscoverList);
        setMovieList(fetchedSortedDiscoverList);
    }

    const searchMovie = async (query) => {
        setFilteredMovieList([]);
        if (query === '') {
            setMovieList(discoverList);
        } else {
            const searchedMovieList = await fetchSearchMovie(query);
            const sortedSearchedMovieList = await sortByPopularity(searchedMovieList.results);

            setMovieList(!sortedSearchedMovieList.length ? [-1] : sortedSearchedMovieList);
        }
    }

    useEffect(() => {
        getDiscoverList();
    }, [])

    return (
        <div className={Styles.MovieContainer}>
            <Search searchMovie={searchMovie} />
            <Rating actualRate={actualRate} changeFilterRate={changeFilterRate} />
            <ListOfMovies openMovieDetails={openMovieDetails} movieList={filteredMovieList.length ? filteredMovieList : movieList} />
            {movieDetails && <ModalMovieDetails openMovieDetails={openMovieDetails} movieDetails={movieDetails} />}
        </div>
    )
}

export default MovieContainer;
