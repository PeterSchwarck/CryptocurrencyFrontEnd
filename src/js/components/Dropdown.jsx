import React from 'react';
import PropTypes from 'prop-types';

import {TestView} from '../views/TestView';
export class Dropdown extends React.Component{
   constructor(props){
        super(props);
        this.state = {
        listOpen: false,
        headerTitle: this.props.title
  };
} 
        
        handleClickOutside(){
          this.setState({
            listOpen: false
          });
        }
        toggleList(){
          this.setState(prevState => ({
            listOpen: !prevState.listOpen
          }));
        }
     


        render(){
          var React = require('react');
          var FontAwesome = require('react-fontawesome');
          const{list} = this.props;
          const{listOpen, headerTitle} = this.state;
         
return(
    <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
            ? <FontAwesome name="angle-up" size="2x"/>
            : <FontAwesome name="angle-down" size="2x"/>
            }
        </div>
        {listOpen && <ul className="dd-list">
                {list.map((item) => (
                    <li className="dd-list-item" key={item.title} onClick={() => this.props.toggleItem.bind(item.id, item.title)}>{item.title} {item.selected && <FontAwesome name="check"/>}</li>
                ))}
            </ul>}
    </div>
);
}
}

Dropdown.propTypes = {
  title : PropTypes.string,
  list :  PropTypes.array,
  toggleItem: PropTypes.func
};
    
  