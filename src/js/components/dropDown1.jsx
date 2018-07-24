import React from 'react';
import PropTypes from 'prop-types';
import MyActions from '../actions/MyActions';


export class DropDown1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'price_delta'};

    
    
  }
  
  componentDidMount(){
    this.props.onChange(this.state.value);
  }

 


  render() {
    return (
    <div className='dropDown2'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Settings:
          <select className= 'settings'
          value={this.state.value} 
          onChange={(e)=>{
            this.props.onChange(e.target.value);
            this.setState({
              value: e.target.value
              
            });
          }}>
            <option className="dropdown-item" value="price_delta">Price</option>
            <option value="volume_delta">Volume</option>
          
          </select>
        </label>
        
      </form>
    </div>
    );
  }
}

DropDown1.propTypes = {
  onChange: PropTypes.func
};
