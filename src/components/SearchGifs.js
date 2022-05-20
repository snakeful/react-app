import React, { useState } from 'react';
import ListGifs from './ListGifs';

const SearchGifs = () => {
  const [keyword, setKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchKeyword(keyword)
  };
  return <form onSubmit={handleSubmit}>
    <input type='text' value={keyword} onChange={handleChange} />
    <button type="submit">Search Gifs</button>
    <ListGifs keyword={searchKeyword} />
  </form>
};

export default SearchGifs;