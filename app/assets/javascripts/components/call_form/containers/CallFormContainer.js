import React from 'react';
import { connect } from 'react-redux';
import CallForm from '../components/CallForm.js';
import { setAddress } from '../actions/address.js';

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  updateAddress: (address) => {
    dispatch(setAddress(address))
  }
})

const CallFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CallForm)

export default CallFormContainer;
