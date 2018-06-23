import React from 'react';
import {Link} from 'react-router-dom';








export class ContactUs extends React.Component {
    render(){
        return (
            <div className="contactus">
                <nav className="navbar sticky-top navbar navbar-dark styleElement">
                    <a className="navbar-brand" href="#">CrappyCoin</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/'className="nav-link" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus">AboutUs</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our data</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Donate</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                        </span>
                    </div>
                </nav>
            
                <form id="contact-form" method="post" action="contact.php" role="form">
    
                    <div className="messages"></div>
        
                    <div className="controls">
        
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="form_name">Firstname</label>
                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="form_lastname">Lastname</label>
                                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="form_email">Email</label>
                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="form_phone">Phone</label>
                                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone"></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="form_message">Message</label>
                                    <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <input type="submit" className="btn btn-success btn-send" value="Send message"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                               
                            </div>
                        </div>
                    </div>
    
                </form>
            </div>
    );
    }
    
}


    