import {
    FETCH_LATEST,
    FETCH_LATEST_SUCCESS,
    FETCH_LATEST_ERROR
  } from '../types'
  
  const INITIAL_STATE = {
    loading: false,
    data: []
  }
  
  const latest = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    switch (type) {
      case FETCH_LATEST:
        return { ...state, loading: true, data: payload }
      case FETCH_LATEST_SUCCESS:
          return { ...state, loading: true, data: payload }
      case FETCH_LATEST_ERROR:
          return { ...state, loading: true, data: payload }
      default:
        return INITIAL_STATE
    }
  }
  export default latest