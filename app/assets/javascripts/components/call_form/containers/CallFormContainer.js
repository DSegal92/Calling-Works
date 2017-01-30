import React from 'react';
import { connect } from 'react-redux';
import CallForm from '../components/CallForm.js';
import { fetchReps } from '../actions';
import { debounce } from '../../lib/debounce.js'

const mapStateToProps = (state) => ({
  officials: [state.president,
              state.vice_president,
              state.senator_0,
              state.senator_1,
              state.representative]
})

const mapDispatchToProps = (dispatch) => {
  let updateAddress = debounce((address) => {
    dispatch(fetchReps(address))
  }, 1000)

  return ({
    updateAddress
  })
}

const CallFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CallForm)

export default CallFormContainer;
