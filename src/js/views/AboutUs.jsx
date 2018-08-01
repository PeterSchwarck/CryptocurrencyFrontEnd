import React from 'react';

import {AddAlert} from '../components/AddAlert';

import {FooterBar} from '../components/FooterBar';
import {NavBar} from '../components/NavBar';



export class AboutUs extends React.Component {
    render(){
        return <div className="aboutUs"> 
            <NavBar />
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
                        <p className="lead">Our data is calculated using the Hitbtc API.</p>
                        <p className="lead"><b>Volume and Price</b></p>
                        <p className="lead">Volume is the number of coins traded on all cryptocurrency exchanges. The volume and price settings are calculated each minute and presented on user-defined market changes.</p>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
            <FooterBar />
        </div>;
    }
}
