import React from 'react';
import Styles from './MovieItem.module.css';

const MovieItem = ({ movie, key }) => {
    console.log(movie);
    return (
        <div className={Styles.MovieItem} key={key}>
            <img alt={'poster'} src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`}></img>
            <div className={Styles.MovieOverview}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Popularity: <span>{movie.popularity}</span></p>
                <p>Score: <span>{movie.vote_average}</span></p>
            </div>
        </div>
    )
}

export default MovieItem;
