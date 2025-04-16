import React from 'react';
import './SearchBar.css';

export default function SearchBar({ query, setQuery }) { // to make it more advanced, use tag filters! 
    return (
    // <div className="search-bar-wrapper">
        <input
        type="text"
        className="search-bar"
        placeholder="Search events..."
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}
        />
    // </div>
    );
}
