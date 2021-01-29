import {
  FETCH_POPULAR,
  FETCH_POPULAR_SUCCESS,
  FETCH_POPULAR_ERROR
} from '../types'

const INITIAL_STATE = {
  loading: false,
  data: []
}

const popular = (state = INITIAL_STATE, action) => {
  const { payload, type } = action
  switch (type) {
    case FETCH_POPULAR:
      return { ...state, loading: true, data: payload }
    case FETCH_POPULAR_SUCCESS:
        return { ...state, loading: true, data: payload }
    case FETCH_POPULAR_ERROR:
        return { ...state, loading: true, data: payload }
    default:
      return INITIAL_STATE
  }
}
export default popular