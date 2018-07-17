import PropTypes from 'prop-types';
import React from 'react';

export class MarketCapDropDown extends React.Component {
  constructor() {
    super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectValue:'Market Cap Range'
    };
}
  
    handleChange(event){
        this.setState({selectValue:event.target.value});
    }
    
    render() {
        return ( <div className="oneDropDown">
            <select className="marketCap"
                defaultValue="Market Cap"
                value={this.state.selectValue} 
                onChange={this.handleChange} 
            >
                <option defaultValue="Market Cap" className="dropdown-item" href="#">Market Cap</option>
                <option className="dropdown-item" href="#">1 Million</option>
                <option className="dropdown-item" href="#">1 - 10 Million</option>
                <option className="dropdown-item" href="#">10 - 19 Million</option>
                <option className="dropdown-item" href="#">20 Million</option>
            </select>
            </div>        
        );
    }
    }
    