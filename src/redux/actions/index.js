import api from '../../utils/api'
import * as types from '../types'

// FETCH POPULAR

export const fetchPopular = payload => dispatch => {
  dispatch({ type: types.FETCH_POPULAR, payload })
  api
    .getPopular(payload)
    .then(res => {
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

export const fetchCockTail = id => dispatch => {
  dispatch({ type: types.FETCH_COCKTAIL, id })
  api
    .getCockTail(id)
    .then(res => {
      dispatch({
        type: types.FETCH_COCKTAIL_SUCCESS,
        payload: res.data.drinks[0]
      })
    })
    .catch(err => {
      dispatch({ type: types.FETCH_COCKTAIL_ERROR, payload: err.response.data })
    })
}

// FETCH RANDOM

export const fetchRandom = () => dispatch => {
  dispatch({ type: types.FETCH_RANDOM })
  api
    .getRandom()
    .then(res => {
      dispatch({
        type: types.FETCH_RANDOM_SUCCESS,
        payload: res.data.drinks[0]
      })
    })
    .catch(err => {
      dispatch({ type: types.FETCH_RANDOM_ERROR, payload: err.response.data })
    })
}
