let react = require('react');
let { debounce } = require('../lib/debounce');

const CallForm = () => {
  const testFunc = debounce((address) => {
    $.ajax({
      type: "GET",
      url: '/representatives',
      data: { address: address },
      dataType: 'json',
      success: function (data) {
        console.log(data)
      }
    })
  }, 1000)

  return (
    <input onChange={(e) => testFunc(e.target.value)}></input>
  )
}

export default CallForm;
