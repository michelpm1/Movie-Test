import React, { useEffect, useState } from 'react';
import ListOfMovies from '../../components/ListOfMovies/ListOfMovies';
import Search from '../../components/Search/Search';
import { fetchDiscoverList } from '../../api/TMDB';
import Styles from './MovieContainer.module.css';
const MovieContainer = () => {
    const [movieList, setMovieList] = useState([]);

    const sortByPopularity = (movieList) => {
        return movieList.sort(function (a, b) {
            return b.popularity - a.popularity;
        });
    }

    useEffect(() => {
        fetchDiscoverList().then((res) => {
            const sortedList = sortByPopularity(res.results);
            setMovieList(sortedList);
        });
    }, [])

    return (
        <div className={Styles.MovieContainer}>
            <Search />
            <ListOfMovies movieList={movieList} />
        </div>
    )
}

export default MovieContainer;
