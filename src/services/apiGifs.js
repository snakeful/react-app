
const apiKey = 'ewcTNiCXa1w00uj6UV9HrrR0zCGen9k4';

const getGifs = ({ keyword = 'developer', limit = 25, offset = 0, lang = 'en' }) => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=${lang}`;
  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { id, title, url }
      });
      return gifs;
    });
};

export const api = {
  getGifs
};