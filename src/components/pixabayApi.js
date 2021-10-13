const API_KEY = '23041177-0c0b450b7629b324f32016842';
const BASE_URL = 'https://pixabay.com/api/';

function fetchPictures(nextValue, page) {
  const url = `${BASE_URL}?q=${nextValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject( new Error(`nothing found for the your request ${nextValue}`));
  });
}

const api = { fetchPictures };

export default api;