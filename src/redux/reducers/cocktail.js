import {
  FETCH_COCKTAIL,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAIL_ERROR
} from '../types'

const INITIAL_STATE = {
  loading: false,
  data: []
}

const cocktail = (state = INITIAL_STATE, action) => {
  const { payload, type } = action
  switch (type) {
    case FETCH_COCKTAIL:
      return { ...state, loading: true, data: payload }
    case FETCH_COCKTAIL_SUCCESS:
      return { ...state, loading: true, data: payload }
    case FETCH_COCKTAIL_ERROR:
      return { ...state, loading: true, data: payload }
    default:
      return INITIAL_STATE
  }
}
export default cocktail
