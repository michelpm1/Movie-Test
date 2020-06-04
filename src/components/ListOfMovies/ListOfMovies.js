import React from 'react';
import Styles from './ListOfMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
import PropTypes from "prop-types"

const ListOfMovies = ({ movieList, openMovieDetails }) => {
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

ListOfMovies.propTypes = {
    movieList: PropTypes.array.isRequired,
    openMovieDetails: PropTypes.func.isRequired,
}

export default ListOfMovies;
