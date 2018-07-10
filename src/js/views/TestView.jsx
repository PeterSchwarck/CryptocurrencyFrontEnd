import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom"; 
import {Dropdown} from '../components/Dropdown';

export class TestView extends Flux.View {
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
        
         toggleSelected(id, title){
            let temp = this.state[title];
            temp[id].selected = !temp[id].selected;
            this.setState({
              [title]: temp
            });
            }
    
    render() {
        return (
            <div className="p-5">
                <Dropdown 
                    title='Parameters'
                    list = {this.state.paramaters}
                    toggleItem={this.toggleSelected}
                />

            </div>
        );
    }
}