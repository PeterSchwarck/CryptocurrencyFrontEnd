import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from '../components/Dropdown';

export class DropdownData extends React.Component{
        constructor(){
          super();
          this.state = {
            paramaters: [
              {
                  id: 0,
                  title: 'Price',
                  selected: false,
                  key: 'param'
              },
              {
                id: 1,
                title: 'Volume',
                selected: false,
                key: 'param'
              },
             
            ]
          };
        }
        
            toggleSelected(id, key){
            let temp = this.state[key];
            temp[id].selected = !temp[id].selected;
            this.setState({
              [key]: temp
            });
            }


    render(){
      return(
          <div className="p-5">
              <Dropdown 
         title='Parameters'
         list = {this.state.param}
         toggleItem={this.toggleSelected}   
            />
          </div>
         );
    }
  
  
}



        