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
    <p className="issueSelector--explainer">
      Note: This message will be sent verbatim to all of the above offices, make sure
      you've filled in all of the prompts, and the message will make sense to them all.
    </p>
    <textarea value={ getScript() } onChange={(e) => updateIssue(activeIssue, e.target.value)}></textarea>
    <p className="issueSelector--explainer">
      Scripts & Issues from <a href="https://5calls.org">5calls.org</a>
    </p>
  </div>
  )
}

export default IssueSelector
