import { SET_ADDRESS } from '../actions/address'

export default (state = { address: '' }, action) => {
  console.log(action)
  console.log(SET_ADDRESS)
  switch(action.type) {
    case SET_ADDRESS:
      console.log('setting')
      return { address: action.address }
    default:
      return state
  }
}
