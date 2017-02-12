import React from 'react';
import AddressInput from './AddressInput';
import Official from './Official';
import Footer from './Footer';

import IssuesContainer from '../containers/IssuesContainer.js';
import SubmitContainer from '../containers/SubmitContainer.js';

const CallForm = ({updateAddress, officials, message, clearPlacedMessage} ) => {
  const primaryVisibility = () => {
    return Object.keys(officials[0]).length > 0 ? 'collapsed call-form--inner' : 'call-form--inner'
  }
  const secondaryVisibility = () => {
    return Object.keys(officials[0]).length > 0 ? 'active secondaryForm' : 'secondaryForm'
  }

  return (
    <div className="call-form">
      <h1 className="call-form--header">CALLING WORKS</h1>
      <div className={ primaryVisibility() }>
        { (message === '') &&
        <AddressInput onChange={updateAddress} /> }
        { (message !== '') &&
          <div className="callMessage">
            <h1>{ message }</h1>
            <h4 onClick={() => clearPlacedMessage()}> Make another call? </h4>
          </div>
        }
      </div>
      <div className={ secondaryVisibility() }>
        <div className="officials">
          <div className="inner">
            { officials.map((o, index) =>
                            <Official {...o}  key={index}/> )
            }
            </div>
        </div>
        <IssuesContainer />
        <SubmitContainer />
      </div>
      <Footer />
    </div>
  )
}

export default CallForm;
