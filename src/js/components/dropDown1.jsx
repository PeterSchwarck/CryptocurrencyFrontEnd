import React from 'react';
import PropTypes from 'prop-types';


export class DropDown1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'price_delta'};

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    console.log('hello');
    this.setState({value: event.target.value});
    console.log(this.state);
  }


  render() {
    return (
    <div className='dropdown2'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Settings:
          <select value={this.state.value} onChange={(e)=>this.handleChange(e)}>
            <option className="dropdown-item" value="price_delta">Price</option>
            <option value="volume_delta">Volume</option>
          
          </select>
        </label>
        
      </form>
    </div>
    );
  }
}