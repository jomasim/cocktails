import server from './server'
const api = {
  getCockTail: async id => server.get(`/lookup.php/${id}`, payload),
  getLatest: async (payload = {}) => server.get('/latest.php', payload),
  getPopular: async (payload = {}) => server.get('/popular.php', payload)
}

export default api
