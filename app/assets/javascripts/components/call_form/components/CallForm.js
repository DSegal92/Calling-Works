import React from 'react';
import AddressInput from './AddressInput';

const CallForm = ({updateAddress, address} ) => {
  return (
    <div className="call-form">
      <div className="header">
        <h1>Call My Rep</h1>
      </div>
      <AddressInput onChange={updateAddress} />
      <h1> {address} </h1>
    </div>
  )
}

export default CallForm;
