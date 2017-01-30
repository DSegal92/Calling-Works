import fetch from 'isomorphic-fetch'

export const SET_ADDRESS = 'SET_ADDRESS';
export const FETCH_REPS = 'FETCH_REPS';
export const REQUEST_REPS = 'REQUEST_REPS';
export const SET_REP = 'SET_REP';

export const setAddress = (address) => {
  return ({ type: SET_ADDRESS, address })
}

export const fetchReps = (address) => (
  (dispatch) => {
    dispatch(requestReps(address))

    return fetch(`/representatives?address=${address}`)
      .then(response => response.json())
      .then(json =>
              json.map(j => dispatch(setRep(j)
            )))

  }
)

export const requestReps = (address) => (
  { type: REQUEST_REPS, address }
)

export const setRep = (json) => (
  { type: SET_REP, json }
)
