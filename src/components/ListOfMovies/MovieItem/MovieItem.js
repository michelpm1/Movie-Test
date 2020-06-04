import React from 'react';
import Styles from './MovieItem.module.css';
import PropTypes from "prop-types"

const MovieItem = ({ movie, key, openMovieDetails }) => {
    return (
        <div onClick={() => openMovieDetails(movie)} className={Styles.MovieItem} key={key}>
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

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    key: PropTypes.number.isRequired,
    openMovieDetails: PropTypes.func.isRequired,
}

export default MovieItem;
