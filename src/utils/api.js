import server from './server'
const api = {
  getCocktails: async (payload = {}) => server.get('/cocktails', payload)
}

export default api
