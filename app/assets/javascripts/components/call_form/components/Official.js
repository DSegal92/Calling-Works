import React from 'react'

const Official = ({ name, photoUrl, office, party, phones }) => {
  return (
    <div className={ `official ${party}` }>
      <div className="official--main">
        <h3>{ name }</h3>
        <h4>{ office }</h4>
      </div>
      <div className="official--secondary">
        <h4> {phones} </h4>
      </div>
    </div>
  )
}

export default Official
