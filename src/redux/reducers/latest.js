import {
    FETCH_LATEST,
    FETCH_LATEST_SUCCESS,
    FETCH_LATEST_ERROR
  } from '../types'
  
  const INITIAL_STATE = {
    loading: false,
    data: [],
    error: {}
  }
  
  const latest = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    switch (type) {
      case FETCH_LATEST:
        return { ...state, loading: true }
      case FETCH_LATEST_SUCCESS:
          return { ...state, loading: false, data: payload }
      case FETCH_LATEST_ERROR:
          return { ...state, loading: false, error: payload }
      default:
        return state
    }
  }
  export default latest