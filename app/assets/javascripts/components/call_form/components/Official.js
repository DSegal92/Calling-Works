import React from 'react'

const Official = ({ name, photoUrl, office }) => (
  <div className="official">
    <hr />
    <img src={photoUrl} />
    <h3> { name } </h3>
    <h4> { office } </h4>
    <hr />
  </div>
)

export default Official
