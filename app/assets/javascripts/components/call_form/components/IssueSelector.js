import React from 'react'

const IssueSelector = ({ issues, activeIssue, selectIssue }) => {
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
    <br />
    <br />
    <select onChange={(e) => { selectIssue(e.target.value) }} >
      { Object.keys(issues).map((i, index) => {
        if (index != 0) {
        return (<option key={issues[i].id} value={issues[i].id}> {issues[i].name} </option>)
        }
      })}
    </select>
    <br />
    <br />
    <textarea value={getScript()}></textarea>
  </div>
  )
}

export default IssueSelector
