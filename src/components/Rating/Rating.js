import React from 'react';
import Styles from './Rating.module.css';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

const Rating = ({ changeFilterRate, actualRate }) => {

    return (
        <div className={Styles.Rating}>
            <StarRatingComponent
                name="filterRate"
                starCount={5}
                value={actualRate}
                onStarClick={(e) => changeFilterRate(e)}
            />
        </div>
    )
}

Rating.propTypes = {
    changeFilterRate: PropTypes.func.isRequired,
    actualRate: PropTypes.number.isRequired
}

export default Rating;