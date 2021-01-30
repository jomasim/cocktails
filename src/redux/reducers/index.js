import { combineReducers } from 'redux'
import popular from './popular'
import latest from './latest'
import cocktail from './cocktail'

const rootReducer = combineReducers({
  popular,
  latest,
  cocktail
})

export default rootReducer
