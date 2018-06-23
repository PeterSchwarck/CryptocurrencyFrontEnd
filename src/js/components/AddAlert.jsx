//import react into the bundle
import React from 'react';
import MyActions from '../actions/MyActions';
import MyStore from '../stores/MyStore';

import SmartSelect from '../components/SmartSelect.jsx';

import {Confirm} from '../views/Confirm';

export class AddAlert extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            phone: '',
            show: true
        };
        
    }
    
    hideModal() {
        this.setState((prevState) => ({
            show: false
        }));
    }
    
    render(){
        
        const countries = [
            {label: 'USA', icon: 'us' },
            {label: 'Venezuela', icon: 've' },
            {label: 'Germany', icon: 'ge' }
        ];
        
        
        // var listTasks = this.state.taks.map( (taskStr, i) => {
        //     return  <li key={i} className="list-group-item">{taskStr} <span className="deleteButton" onClick={() => this.deleteTask(taskStr)}>x</span></li>;
        // });
        
        
        
        return <div className="jumbotron add-alert" style={{display: (this.state.show) ? 'inline-block' : 'none'}}>
            <div className="deleteX">
                <button onClick={() => this.hideModal()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-10">
                        <h1 className="display-4">Enable notifications</h1>
                        <p className="lead">Enter your information to recieve alerts on the go.</p>
                        <hr className="my-4"></hr>
                        <form>
                            <div className="form-groupEmail">Mobile
                                <span className="form-row align-items-center">
                                    <div className="col-auto my-1">
                                        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect"></label>
                                        <SmartSelect options={countries} />
                                    </div>
                                    <label htmlFor="formGroupExampleInput"></label>
                                    <input type="text" className="form-controlPhone" id="formGroupExampleInput" placeholder="Mobile number" onChange={(e) => this.setState({phone:e.target.value})} value={this.state.phone}></input>
                                </span>
                                <br></br>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email}></input>
                                    <small id="emailHelp" className="form-text text-muted">{"We'll never share your information with anyone."}</small>
                                </div>
                            </div>
                            <p className="lead">
                                <a className="btn btn-success btn-lg" href="#" role="button" onClick={() => MyActions.setupNotification({email: this.state.email, phone: this.state.phone})}>  Ok  </a> 
                                <button onClick={() => this.hideModal()} className="btn btn-secondary btn-lg" href="#" role="button">Cancel</button>
                            </p>
                        </form>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>
            <Confirm />
        </div>;
    }
}
