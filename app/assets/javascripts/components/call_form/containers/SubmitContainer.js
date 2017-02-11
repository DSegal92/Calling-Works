import { connect } from 'react-redux';
import Submit from '../components/Submit.js';

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

const SubmitContainer = connect(
  mapStateToProps
)(Submit)

export default SubmitContainer;
