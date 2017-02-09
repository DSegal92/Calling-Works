import { SET_ISSUE, SET_ACTIVE_ISSUE } from '../actions'

export default (state = {}, action) => {
  switch(action.type) {
    case SET_ISSUE:
      return { ...state, [action.json.id]: action.json }
    case SET_ACTIVE_ISSUE:
      console.log('asddddddddf')
      return { ...state, active: action.id }
    default:
      return state
  }
}
