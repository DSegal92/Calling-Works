import { combineReducers } from 'redux'
import issues from './issues'
import officials from './officials'

export default combineReducers({
  issues,
  officials
})
