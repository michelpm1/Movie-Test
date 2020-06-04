import React from 'react';
import Styles from './ListOfMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
const ListOfMovies = ({ movieList, openMovieDetails }) => {
    console.log(movieList);
    return (
        <div className={Styles.ListOfMovies}>
            {movieList[0] !== -1 ? <div className={Styles.List}>
                {movieList.map((item, key) => {
                    return (
                        <MovieItem openMovieDetails={openMovieDetails} movie={item} key={key} />
                    )
                })}
            </div> : <span>No results</span>}
        </div>
    )
}

export default ListOfMovies;
