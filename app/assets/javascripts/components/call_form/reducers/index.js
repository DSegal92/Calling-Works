import { combineReducers } from 'redux'
import issues from './issues'
import officials from './officials'
import call from './call'

import { SET_CALL_PLACED } from '../actions'

const appReducer = combineReducers({
  issues,
  officials,
  call
})

const rootReducer = (state, action) => {
  if (action.type === SET_CALL_PLACED) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
