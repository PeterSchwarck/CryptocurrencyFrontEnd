import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';

class SmartSelect extends React.Component{
    
    render(){
          const optionsAsHtml = this.props.options.map(function(c,i){
            
              return <a key={i}  className="dropdown-item" href="#">
                  <span>{c.label}</span>
                  <img src={'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/'+c.icon+'.svg'} />
              </a>;
          });
          
        const selectedOpt = <span>{this.props.options[0].label} <img src={'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/'+this.props.options[0].icon+'.svg'} /></span>;
        return (
            <div className="dropdown smartselect">
                <button className="btn btn-secondary dropdown-toggle countries" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {selectedOpt}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {optionsAsHtml}
                </div>
            </div>
        );
    }
}
SmartSelect.propTypes = {
  options: PropTypes.array.isRequired
};
SmartSelect.defaultProps = {
  options: []
};
export default SmartSelect;