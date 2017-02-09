import React from 'react';

const AddressInput= ({onChange}) => {
  return (
    <div className="address-input">
      <input onChange={(e) => onChange(e.target.value)} placeholder="Enter address or zipcode"></input>
    </div>
  )
}

export default AddressInput;
