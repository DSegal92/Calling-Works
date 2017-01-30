import React from 'react';
import AddressInput from './AddressInput';
import Official from './Official';

const CallForm = ({updateAddress, officials} ) => {
  return (
    <div className="call-form">
      <div className="header">
        <h1>Call My Rep</h1>
      </div>
      <AddressInput onChange={updateAddress} />
      { officials.map(o =>
                      <Official {...o}  /> )
      }
    </div>
  )
}

export default CallForm;
