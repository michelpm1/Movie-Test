import React from 'react';
import Styles from './Search.module.css';
import PropTypes from 'prop-types';

const Search = ({ searchMovie }) => {
    return (
        <div className={Styles.Search}>
            <input onChange={(e) => searchMovie(e.target.value)} className="formControl" type="text" placeholder="Search" />
        </div>
    )
}

Search.propTypes = {
    searchMovie: PropTypes.func.isRequired,
}

export default Search;