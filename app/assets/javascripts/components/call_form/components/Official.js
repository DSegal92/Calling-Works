import React from 'react'

const Official = ({ name, photoUrl, office, party }) => {
  return (
    <div className="official">
      <h3> { name } </h3>
      <h4> { office } </h4>
    </div>
  )
}

export default Official
