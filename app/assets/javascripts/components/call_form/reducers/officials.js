import { SET_REP } from '../actions'

export default (state = { president: {}, vice_president: {}, senator_1: {}, senator_2: {}, representative: {} }, action) => {
  switch(action.type) {
    case SET_REP:
      return { ...state, [action.json.designator]: action.json }
    default:
      return state
  }
}
