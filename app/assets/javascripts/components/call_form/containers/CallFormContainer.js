import React from 'react';
import { connect } from 'react-redux';
import CallForm from '../components/CallForm.js';
import { fetchReps, fetchIssues, setPlacedMessage } from '../actions';
import { debounce } from '../../lib/debounce.js'

const mapStateToProps = (state) => ({
  officials: [state.officials.president,
              state.officials.vice_president,
              state.officials.senator_0,
              state.officials.senator_1,
              state.officials.representative],
  message: state.call.message
})

const mapDispatchToProps = (dispatch) => {
  let updateAddress = debounce((address) => {
    dispatch(fetchReps(address))
    dispatch(fetchIssues(address))
  }, 250)

  return ({
    updateAddress,

    clearPlacedMessage: () => {
      dispatch(setPlacedMessage(''))
    }
  })
}

const CallFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CallForm)

export default CallFormContainer;
