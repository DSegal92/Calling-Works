import { connect } from 'react-redux';
import Submit from '../components/Submit.js';
import { placeCall } from '../actions';

const mapStateToProps = (state) => {
  const getScript = () => {
    if (state.issues.active && state.issues[state.issues.active]) {
      return state.issues[state.issues.active].script
    }

    return ''
  }

  const getPhones = () => {
    return Object.keys(state.officials).map(o =>
                                            state.officials[o].phones
                                           )
  }
  return ({
    script: getScript(),
    phones: getPhones()
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    placeCall: () => {
      dispatch(placeCall())
    }
  }
}

const SubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Submit)

export default SubmitContainer;
