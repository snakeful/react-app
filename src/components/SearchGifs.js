import React, { useState } from 'react';
import ListGifs from './ListGifs';

const SearchGifs = () => {
  const [keyword, setKeyword] = useState('programming');
  const [searchKeyword, setSearchKeyword] = useState('programming');
  const onChange = (event) => {
    return setKeyword(event.target.value);
  };
  const search = () => {
    setSearchKeyword(keyword)
  };
  return <div>
    <input type='text' value={keyword} onChange={onChange} />
    <button onClick={search}>Search Gifs</button>
    <ListGifs keyword={searchKeyword} />
  </div>
};

export default SearchGifs;