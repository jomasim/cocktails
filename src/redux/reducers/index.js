import { combineReducers } from 'redux'
import popular from './popular'
import latest from './latest'
import cocktail from './cocktail'
import random from './random'

const rootReducer = combineReducers({
  popular,
  latest,
  cocktail,
  random
})

export default rootReducer
