import React from 'react';
import { connect } from 'react-redux';
import IssueSelector from '../components/IssueSelector.js';
import { fetchReps, fetchIssues, setIssue, setActiveIssue } from '../actions';
import { debounce } from '../../lib/debounce.js'

const mapStateToProps = (state) => ({
  issues: state.issues,
  activeIssue: state.issues.active
})

const mapDispatchToProps = (dispatch) => {
  return {
    selectIssue: (id) => {
      dispatch(setActiveIssue(id))
    }
  }
}

const IssuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueSelector)

export default IssuesContainer;
