const Submit = ({ script, phones, placeCall }) => {
  const submitCall = () => {
    placeCall()
    $.ajax({
      url: '/call',
      method: 'POST',
      dataType: 'json',
      data: { script: script, phones: phones}
    })
  }

  return (
    <div className="form-submit">
      { (phones.length > 0) &&
        <div className="submit-button" onClick={ () => submitCall() }>Call!</div>
      }
    </div>
  )
}

export default Submit
