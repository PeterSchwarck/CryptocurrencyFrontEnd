import React from 'react';

import {Link} from 'react-router-dom';

import {Donate} from '../components/Donate';

import PropTypes from 'prop-types';

export class NavBar extends React.Component{ 
    
    constructor(){
        super();
            this.state = {
                showDonationModal: false
            };
    }
    
    toggleDonationModal() {
        this.setState((prevState) => ({
            showDonationModal: !this.state.showDonationModal
        }));
    }





    render(){
        return( <div className="navbarDiv">
            <nav className="navbar sticky-top navbar navbar-dark styleElement">
                <a className="navbar-brand" href="#">CrappyCoin</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='home2'className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='aboutus'className="nav-link" href="#">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='aboutus'className="nav-link" href="#">Our data</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => this.toggleDonationModal()}>Donate</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    </span>
                </div>
            </nav>
            {
                <Donate show={this.state.showDonationModal} onClose={()=>this.toggleDonationModal()}  />
            }
        </div>
      );
    }
}// JavaScript File


