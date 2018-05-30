import React from 'react';

import {AddAlert} from '../components/AddAlert';

export class AboutUs extends React.Component {
    render(){
        return <div className="aboutUs"> 
            <div className="adBanner">Ad Banner!
            </div>
            <nav className="navbar sticky-top navbar navbar-dark styleElement">
                <a className="navbar-brand" href="#">CrappyCoin</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
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
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-10">
                        <h1 className="display-4">About Us</h1>
                        <hr className="my-4"></hr>
                        <p className="lead">This is a class project developed by two students at 4Geeks Academy.</p>
                        <br></br>
                        <h1 className="display-4">Our Data</h1>
                        <hr className="my-4"></hr>
                        <p className="lead"><b>Our formula</b></p>
                        <p className="lead">Explain here how the data is calculated and how often the rates are refreshed.</p>
                        <p className="lead"><b>Market Cap</b></p>
                        <p className="lead">Market cap, or market capitalization, is the market value of all outstanding coins of a cryptocurrency. Market capitalization is calculated by multiplying the outstanding coins by the current market price of a cryptocurrency.</p>
                        <p className="lead"><b>Volume</b></p>
                        <p className="lead">Volume is the number of coins traded on all cryptocurrency exchanges. The volume is calculated each minute and presented on a user defined period of time.</p>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div> 
            <AddAlert />
            <footer>
                <section className="lab_social_icon_footer">
                    <div className="container">
                        <div className="text-center center-block">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-3x social-fb"></i></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square fa-3x social-tw"></i></a>
                            <a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus-square fa-3x social-gp"></i></a>
                            <a href="mailto:#"><i className="fa fa-envelope-square fa-3x social-em"></i></a>
                        </div>
                        <section>
                            <div className="footerDiv"> 
                                <p></p>
                                Created by CappyCoin, 2018
                            </div>
                        </section>  
                    </div>
                </section>
            </footer>
        </div>;
    }
}
