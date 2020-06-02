import React from 'react';
import Styles from './Search.module.css';

const Search = () => {
    return (
        <div className={Styles.Search}>
            <input className="formControl" type="text" placeholder="Search" />
        </div>
    )
}

export default Search;