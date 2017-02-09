import React from 'react';
import AddressInput from './AddressInput';
import Official from './Official';

const CallForm = ({updateAddress, officials} ) => {
  return (
    <div className="call-form">
      <div className="call-form--header">
        <h1>Calling Works</h1>
      </div>
      <AddressInput onChange={updateAddress} />
      <div className="officials">
        { officials.map((o, index) =>
                        <Official {...o}  key={index}/> )
        }
      </div>
    </div>
  )
}

export default CallForm;
