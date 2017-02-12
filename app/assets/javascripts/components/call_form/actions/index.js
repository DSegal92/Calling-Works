import fetch from 'isomorphic-fetch'

export const SET_ADDRESS = 'SET_ADDRESS';
export const FETCH_REPS = 'FETCH_REPS';
export const REQUEST_REPS = 'REQUEST_REPS';
export const SET_REP = 'SET_REP';
export const SET_ISSUE = 'SET_ISSUE';
export const FETCH_ISSUES = 'FETCH_ISSUES';
export const SET_ACTIVE_ISSUE = 'SET_ACTIVE_ISSUE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';

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

export const setIssue = (json) => {
  return (
    { type: SET_ISSUE, json }
  )
}

export const fetchIssues = (address) => (
  (dispatch) => {
    return fetch(`/issues?address=${address}`)
      .then(response => response.json())
      .then(json => { dispatch(setActiveIssue(json[0].id)); return json })
      .then(json => json.map(j => dispatch(setIssue(j))))

  }
)

export const setActiveIssue = (id) => (
  { type: SET_ACTIVE_ISSUE, id }
)

export const updateIssue = (id, content) => (
  { type: UPDATE_ISSUE, id, content }
)
