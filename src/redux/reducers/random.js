import {
    FETCH_RANDOM,
    FETCH_RANDOM_SUCCESS,
    FETCH_RANDOM_ERROR
  } from '../types'
  
  const INITIAL_STATE = {
    loading: false,
    data: {}
  }
  
  const random = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    switch (type) {
      case FETCH_RANDOM:
        return { ...state, loading: true }
      case FETCH_RANDOM_SUCCESS:
        return { ...state, loading: false, data: payload }
      case FETCH_RANDOM_ERROR:
        return { ...state, loading: false, data: payload }
      default:
        return state
    }
  }
  export default random
  