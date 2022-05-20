import React, { useEffect, useState } from 'react';
import { api } from '../services/apiGifs';
import Gif from './Gif';

const ListGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    api.getGifs({ keyword }).then(setGifs);
  }, [keyword]/** No dependencies, it's called once */)

  return gifs.map(({ id, title, url }) => <Gif key={id} title={title} url={url} /> );
};

export default ListGifs;