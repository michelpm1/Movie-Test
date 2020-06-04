import React from 'react';
import Styles from './ModalMovieDetails.module.css';
const ModalMovieDetails = ({ movieDetails, openMovieDetails }) => {

    return (
        <>
            <div className={Styles.ModalMovieDetails}>
                <div className={Styles.ModalContent}>
                    <span onClick={() => openMovieDetails(null)} className={Styles.Close}>&times;</span>
                    <div>
                        <h4>{movieDetails.title}</h4>
                        <img alt={'poster'} src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movieDetails.poster_path}`}></img>
                        <p>{movieDetails.overview}</p>
                        <div className={Styles.BottomDetails}>
                            <p>Popularity: {movieDetails.popularity}</p>
                            <p>Language: {movieDetails.original_language}</p>
                            <p>Release date: {movieDetails.release_date}</p>
                            <p>Original title: {movieDetails.original_title}</p>
                            <p>Vote averange: {movieDetails.vote_average}</p>
                            <p>Adult movie: {movieDetails.adult ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default ModalMovieDetails;