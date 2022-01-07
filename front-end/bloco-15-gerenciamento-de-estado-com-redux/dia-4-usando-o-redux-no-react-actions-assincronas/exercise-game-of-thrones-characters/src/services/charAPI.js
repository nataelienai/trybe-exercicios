const API_URL = 'https://anapioficeandfire.com/api/characters?name=';

const charAPI = (char) => (
  fetch(`${API_URL}${char.split().join('+')}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default charAPI;
