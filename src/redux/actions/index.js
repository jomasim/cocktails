import api from '../../utils/api'
import * as types from '../types'

// FETCH POPULAR

export const fetchPopular = payload => dispatch => {
  dispatch({ type: types.FETCH_POPULAR, payload })
  api
    .getPopular(payload)
    .then(res => {
      console.log(res.data, 'popular')
      dispatch({
        type: types.FETCH_POPULAR_SUCCESS,
        payload: res.data.drinks.slice(0, 5)
      })
    })
    .catch(err => {
      dispatch({
        type: types.FETCH_POPULAR_ERROR,
        payload: err.response.data
      })
    })
}

// FETCH LATEST

export const fetchLatest = payload => dispatch => {
  dispatch({ type: types.FETCH_LATEST, payload })
  api
    .getLatest(payload)
    .then(res => {
      console.log(res.data, 'latest')
      dispatch({
        type: types.FETCH_LATEST_SUCCESS,
        payload: res.data.drinks.slice(0, 5)
      })
    })
    .catch(err => {
      dispatch({ type: types.FETCH_LATEST_ERROR, payload: err.response.data })
    })
}

// FETCH COCKTAIL

export const fetchCockTail = payload => dispatch => {
  dispatch({ type: types.FETCH_COCKTAIL, payload })
  api
    .getCockTail(payload)
    .then(res => {
      dispatch({ type: types.FETCH_COCKTAIL_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: types.FETCH_COCKTAIL_ERROR, payload: err.response.data })
    })
}
