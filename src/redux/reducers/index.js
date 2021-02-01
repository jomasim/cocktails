import { combineReducers } from 'redux'
import popular from './popular'
import latest from './latest'
import cocktail from './cocktail'
import random from './random'
import postCockTail from './postcocktail'
import uploadImage from './uploadimage'

const rootReducer = combineReducers({
  popular,
  latest,
  cocktail,
  random,
  postCockTail,
  uploadImage
})

export default rootReducer
