import React from 'react';
import PropTypes from 'prop-types';


export class DropDown2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '0'};

    
    
  }

   componentDidMount(){
    this.props.onChange(this.state.value);
  }

  render() {
    return (
    <div className='dropDown3'>
      <form onSubmit={this.handleSubmit}>
        <label>
        <span className='label1'>
          Delta:
        </span>
            <select className= 'delta'
          value={this.state.value} 
          onChange={(e)=>{
            this.props.onChange(e.target.value);
            this.setState({
              value: e.target.value
            });
          }}>
            <option value="30">30%</option>
            <option value="25">25%</option>
            <option value="20">20%</option>
            <option value="15">15%</option>
            <option value="10">10%</option>
            <option value="5">5%</option>
            <option value="-5">-5%</option>
            <option value="-10">-10%</option>
            <option value="-15">-15%</option>
            <option value="-20">-20%</option>
          
          </select>
        </label>
        
      </form>
    </div>
    );
  }
}

DropDown2.propTypes = {
  onChange: PropTypes.func
};