import fontawesome from '@fortawesome/fontawesome';

import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';

import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';

import logoUrl from '../../img/logo/logo.png';

import React from 'react';

import {AddAlert} from '../components/AddAlert';

fontawesome.config = {
autoReplaceSvg: 'nest'
};

fontawesome.library.add(
    faSearch,
    faPlusCircle,
    faTrashAlt
);


export class HomeEdit extends React.Component {
    render(){
        return <div className="homeEdit">
            <header>
                <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
            </header>
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
            <div className="containerDiv container">
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="topDiv">
                            <img src={logoUrl}></img><h1>CrappyCoin</h1>
                        </div>
                        <div className="input-group">
                            <div>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <input className="searchBar-edit" type="text" placeholder=" Search..." id="myInput" onKeyUp="filterFunction()"></input>
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-search">
                                </i>
                            </button>
                            <div className="dropdown  d-inline-block">
                                <button className="btn btn-secondary dropdown-toggle firstbutton" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Market cap range
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">1 Million</a>
                                    <a className="dropdown-item" href="#">10 Million</a>
                                    <a className="dropdown-item" href="#">20 Million</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="divBody-edit">
                            <div className="btn-group">
                                <div className="dropdown  d-inline-block">
                                    <button className="btn btn-secondary dropdown-toggle secondButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Settings
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Volume</a>
                                        <a className="dropdown-item" href="#">Carket cap</a>
                                        <a className="dropdown-item" href="#">Price</a>
                                    </div>
                                </div>
                                <div className="dropdown  d-inline-block">
                                    <button className="btn btn-secondary dropdown-toggle thirdButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Delta
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">30%</a>
                                        <a className="dropdown-item" href="#">20%</a>
                                        <a className="dropdown-item" href="#">10%</a>
                                        <a className="dropdown-item" href="#">5%</a>
                                        <a className="dropdown-item" href="#">0%</a>
                                        <a className="dropdown-item" href="#">-5%</a>
                                        <a className="dropdown-item" href="#">-10%</a>
                                        <a className="dropdown-item" href="#">-20%</a>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-secondary fithButton">Enable notifcations</button>
                                
                                
                                
                                <button type="button" className="btn btn-light plus">
                                    <i className="fas fa-plus-circle">
                                    </i>
                                </button>
                                <button type="button" className="btn btn-light trash">
                                    <i className="fas fa-trash-alt">
                                    </i>
                                </button>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="bottomDiv">
                            <button type="button" className="btn btn-secondary sixthButton">Add currency</button>
                        </div>
                    </div>    
                </div>
            </div>
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
            <AddAlert />
        </div>;
    }
}