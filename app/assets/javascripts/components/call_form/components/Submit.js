const Submit = ({ script, phones }) => {
  const submitCall = () => {
    $.ajax({
      url: '/call',
      method: 'POST',
      dataType: 'json',
      data: { script: script, phones: phones}
    })
  }

  return (
    <div className="form-submit">
      <div className="submit-button">Call!</div>
    </div>
  )
}

export default Submit
