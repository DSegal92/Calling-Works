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
    <input type="submit" value="Call!" onClick={() => submitCall() }></input>
  )
}

export default Submit
