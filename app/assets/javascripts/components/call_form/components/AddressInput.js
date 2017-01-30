import React from 'react';

const AddressInput= ({onChange}) => {
  return (
    <input onChange={(e) => onChange(e.target.value)}></input>
  )
}

export default AddressInput;
