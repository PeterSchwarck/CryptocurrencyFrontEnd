//import react into the bundle
import React from 'react';
export class Jumbo extends React.Component {
    render(){
        return <div className="jumbotron">
            <h1 className="display-4">Enable notifications</h1>
            <p className="lead">Enter your information to recieve alerts on the go.</p>
            <hr className="my-4"></hr>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Mobile number</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Mobile number"></input>
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">{"We'll never share your information with anyone."}</small>
                </div>
            </form>
            <p className="lead">
                <a className="btn btn-success btn-lg" href="#" role="button">Ok</a>
            </p>
        </div>;
    }
}
