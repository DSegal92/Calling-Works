import React from 'react';
import AddressInput from './AddressInput';
import Official from './Official';

const CallForm = ({updateAddress, officials} ) => {
  return (
    <div className="call-form">
      <h1 className="style1">CALLING WORKS</h1>
      <AddressInput onChange={updateAddress} />
      <div className="officials">
        <div className="inner">
          { officials.map((o, index) =>
                          <Official {...o}  key={index}/> )
          }
          </div>
      </div>
    </div>
  )
}

export default CallForm;
