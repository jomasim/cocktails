import server from './server'
const api = {
  getCockTail: async id => server.get(`/lookup.php/?i=${id}`),
  getLatest: async () => server.get('/latest.php'),
  getPopular: async () => server.get('/popular.php'),
  getRandom: async () => server.get('/random.php')
}

export default api
