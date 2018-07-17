import React from 'react';
import PropTypes from 'prop-types';


export class DropDown2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '0%'};

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Settings:
          <select value={this.state.value} onChange={(e) => this.handleChange(e)}>
            <option value="30%">30%</option>
            <option value="25%">25%</option>
            <option value="20%">20%</option>
            <option value="15%">15%</option>
            <option value="10%">10%</option>
            <option value="5%">5%</option>
            <option value="-5%">-5%</option>
            <option value="-10%">-10%</option>
            <option value="-15%">-15%</option>
            <option value="-20%">-20%</option>
          
          </select>
        </label>
        
      </form>
    );
  }
}