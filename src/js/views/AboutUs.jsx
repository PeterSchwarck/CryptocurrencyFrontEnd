import React from 'react';

export class AboutUs extends React.Component {
    render(){
        return <div className="aboutUs"> 
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Crappy Coin</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our data</a>
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
        </div>;
    }
}
