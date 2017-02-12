import { SET_PLACED_MESSAGE } from '../actions'

export default (state = { message: '' }, action) => {
  switch(action.type) {
    case SET_PLACED_MESSAGE:
      return { ...state, message: action.message }
    default:
      return state
  }
}
