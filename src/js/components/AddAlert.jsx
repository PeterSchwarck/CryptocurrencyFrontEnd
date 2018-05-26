//import react into the bundle
import React from 'react';

import SmartSelect from '../components/SmartSelect';

export class AddAlert extends React.Component {
    render(){
        
        const countries = [
            {label: 'USA', icon: 'us' },
            {label: 'Venezuela', icon: 've' },
            {label: 'Germany', icon: 'ge' }
        ];
        return <div className="jumbotron add-alert">
            <div className="deleteX">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                        <label className="mr-sm-2" htmlForfor="inlineFormCustomSelect"></label>
                                        <SmartSelect options={countries} />
                                    </div>
                                    <label htmlFor="formGroupExampleInput"></label>
                                    <input type="text" className="form-controlPhone" id="formGroupExampleInput" placeholder="Mobile number"></input>
                                </span>
                                <br></br>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" className="form-text text-muted">{"We'll never share your information with anyone."}</small>
                                </div>
                            </div>
                            <p className="lead">
                                <a className="btn btn-success btn-lg" href="#" role="button">  Ok  </a> 
                                <a className="btn btn-secondary btn-lg" href="#" role="button">Cancel</a> 
                            </p>
                        </form>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>    
        </div>;
    }
}
