import React from 'react';
import { connect } from 'react-redux';
import IssueSelector from '../components/IssueSelector.js';
import { fetchReps, fetchIssues, setIssue, setActiveIssue, updateIssue } from '../actions';
import { debounce } from '../../lib/debounce.js'

const mapStateToProps = (state) => ({
  issues: state.issues,
  activeIssue: state.issues.active
})

const mapDispatchToProps = (dispatch) => {
  return {
    selectIssue: (id) => {
      dispatch(setActiveIssue(id))
    },

    updateIssue: (id, content) => {
      dispatch(updateIssue(id, content))
    }
  }
}

const IssuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueSelector)

export default IssuesContainer;
