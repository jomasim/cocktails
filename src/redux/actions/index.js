import api from '../../utils/api'
import { db, storage } from '../../utils/firebase'
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

// UPLOAD IMAGE
export const uploadImage = payload => dispatch => {
  dispatch({ type: types.UPLOAD_IMAGE, payload })
  storage
    .ref('images/' + payload.name)
    .put(payload)
    .then(snapshot => {
      return snapshot.ref.getDownloadURL()
    })
    .then(url => {
      dispatch({
        type: types.UPLOAD_IMAGE_SUCCESS,
        payload: { url, status: 'done', name: payload.name }
      })
    })
    .catch(error => {
      dispatch({ type: types.UPLOAD_IMAGE_ERROR, payload: error })
    })
}

// POST CUSTOM COCKTAILS
export const postCockTail = payload => dispatch => {
  dispatch({ type: types.POST_COCKTAIL, payload })
  db.collection('cocktails')
    .add(payload)
    .then(doc => {
      dispatch({ type: types.POST_COCKTAIL_SUCCESS, payload: doc })
      dispatch(fetchCustomCockTail())
    })
    .catch(err => {
      dispatch({ type: types.POST_COCKTAIL_ERROR, payload: err })
    })
}

// FETCH CUSTOM COCKTAILS
export const fetchCustomCockTail = () => dispatch => {
  const cockTails = []
  dispatch({ type: types.FETCH_CUSTOM })
  db.collection('cocktails')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        cockTails.push(doc.data())
      })
      dispatch({ type: types.FETCH_CUSTOM_SUCCESS, payload: cockTails })
    })
    .catch(err => {
      dispatch({ type: types.FETCH_CUSTOM_ERROR, payload: err })
    })
}
