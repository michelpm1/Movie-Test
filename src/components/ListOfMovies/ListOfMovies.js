import React from 'react';
import Styles from './ListOfMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
const ListOfMovies = ({ movieList }) => {
    console.log(movieList);
    return (
        <>
            {movieList[0] !== -1 ? <div className={Styles.MovieList}>
                {movieList.map((item, key) => {
                    return (
                        <MovieItem movie={item} key={key} />
                    )
                })}
            </div> : <span>No results</span>}
        </>
    )
}

export default ListOfMovies;
