import React from 'react'

const IssueSelector = ({ issues, activeIssue, selectIssue, updateIssue }) => {
  const getScript = () => {
    if (issues[activeIssue]) {
      return issues[activeIssue].script
    }
    else if (Object.keys(issues).length > 0) {
      return ''
    }
    else {
      return ''
    }
  }

  return (
  <div className="issueSelector">
    <h1> Send Them a Message </h1>
    <select onChange={(e) => { selectIssue(e.target.value) }} >
      { Object.keys(issues).map((i, index) => {
        if (index != 0) {
        return (<option key={issues[i].id} value={issues[i].id}> {issues[i].name} </option>)
        }
      })}
    </select>
    <textarea value={ getScript() } onChange={(e) => updateIssue(activeIssue, e.target.value)}></textarea>
  </div>
  )
}

export default IssueSelector
