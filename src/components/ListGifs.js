import Gif from './Gif';

const ListGifs = ({ gifs }) => {
  return gifs.map(({ id, title, url }) => <Gif key={id} title={title} url={url} /> );
};

export default ListGifs;