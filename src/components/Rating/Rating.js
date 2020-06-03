import React, { useState } from 'react';
import Styles from './Rating.module.css';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

const Rating = ({ changeFilterRate }) => {
    // const [filterRate, setFilterRate] = useState(5);

    return (
        <div className={Styles.Rating}>
            <StarRatingComponent
                name="filterRate"
                starCount={5}
                value={0}
                onStarClick={(e) => changeFilterRate(e)}
            />
        </div>
    )
}

Rating.propTypes = {
    changeFilterRate: PropTypes.func.isRequired,
}

export default Rating;