import React from 'react';

class AddressInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontSize: 80 }
  }

  updateInput(value) {
    this.props.onChange(value)
    this.setState((prevState => ({
      fontSize: Math.max(80 - (value.length * 3), 30)
    })));
  }

  styles(){
    return { fontSize: `80px`,
             lineHeight: `80px`}
  }

  render() {
    return (
      <div className="address-input">
        <input type="tel"
               pattern="\d{5}"
               style={this.styles()}
               className=""
               onChange={(e) => this.updateInput(e.target.value)}
               placeholder="Enter zipcode" ></input>
      </div>
    )
  }
}

export default AddressInput;
