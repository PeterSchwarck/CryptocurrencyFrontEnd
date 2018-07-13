import React from 'react';
import {Link} from 'react-router-dom';
import MyActions from '../actions/MyActions';
import MyStore from '../stores/MyStore';



export class NewNotificationView extends React.Component {
    
    constructor(){
        this.state = {
            
        };
        this.bindStore(MyStore, ()=>{
            // Whatever i want to do here
        });
    }
    
    
    handleNewClick(){
        // Pull out the variables from the state
        const phone = this.state.phone;
        
        const data = {
            phone: phone;
            //
            //
        }
        // Calli the Action
        MyActions.setupNotification(data);
    }
    
    render(){
        return <div className="contactus">
            <form>
            <Button onClick={()=> this.handleNewClick()} />
            </form>
        </div>;
    }
    
}


    