import axios from 'axios';

const accessToken = '5b3ce3597851110001cf624833b905dad4ac4eea8afb52c48b93f728';

const API = 'https://api.openrouteservice.org';

const instance = axios.create({
  baseURL: API,
  headers: {
    Authorization: accessToken,
  }
})


export const getDirections = async (origin, destination) => {
  const coordinates = [origin, destination];
  console.log('TODO por qué esta petición me falla?', coordinates)
  const r = await instance.post('/v2/directions/foot-walking/json', {
    coordinates,
    radiuses: [45000, 45000]
  });
  console.log('aaaaaaaaaaaaaaaa',r)
  return r.data;
}