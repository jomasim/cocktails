import {
  POST_COCKTAIL,
  POST_COCKTAIL_ERROR,
  POST_COCKTAIL_SUCCESS
} from '../types'

const INITIAL_STATE = {
  data: undefined,
  error: undefined,
  loading: false
}
const postCocktail = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case POST_COCKTAIL:
      return { ...state, loading: true, payload }
    case POST_COCKTAIL_SUCCESS:
      return { ...state, loading: false, data: payload }
    case POST_COCKTAIL_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default postCocktail
