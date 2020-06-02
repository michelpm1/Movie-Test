import React from 'react';
import Styles from './ListOfMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
const ListOfMovies = ({ movieList }) => {
    console.log(movieList);
    return (
        <div className={Styles.MovieList}>
            {movieList.map((item, key) => {
                return (
                    <MovieItem movie={item} key={key} />
                )
            })}
        </div>
    )
}

export default ListOfMovies;
