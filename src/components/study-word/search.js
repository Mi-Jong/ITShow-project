import React, { useState, useEffect } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(query);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [query, onSearch]);

    return (
        <div className='search'>
            <input
                placeholder='단어를 검색해주세요'
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;
