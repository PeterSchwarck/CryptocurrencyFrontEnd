import fontawesome from '@fortawesome/fontawesome';

import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';

import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';

import React from 'react';

import {Link} from 'react-router-dom';

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
    
// function myFunction() {
//     document.getElementById("myDropdown").classNameList.toggle("show");
// }

// function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//         <div> = document.getElementById("myDropdown");</div>;
//     a = <div>.getElementsByTagName("a");</div>;
//     for (i = 0; i < a.length; i++) {
//         if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
//             a[i].style.display = "";
//         } else {
//             a[i].style.display = "none";
//         }
//     }
// }
    
        return <div className="homeEdit">
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
                            <Link to='/'className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aboutus'className="nav-link" href="#">About us</Link>
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
            <div className="containerDiv">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-6">
                        <div className="topDiv">
                            <span><img src="https://farm2.staticflickr.com/1727/40587274190_57f4609787_b.jpg" width="984" height="514" alt="logo"></img><h1>CrappyCoin</h1>
                            </span>
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
                                        <a className="dropdown-item" href="#">-5%</a>
                                        <a className="dropdown-item" href="#">-10%</a>
                                        <a className="dropdown-item" href="#">-20%</a>
                                    </div>
                                </div>
                                <div className="dropdown  d-inline-block">
                                    <button className="btn btn-secondary dropdown-toggle fourthButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Time
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">24 hr.</a>
                                        <a className="dropdown-item" href="#">12 hr.</a>
                                        <a className="dropdown-item" href="#">1 hr.</a>
                                        <a className="dropdown-item" href="#">30 min.</a>
                                        <a className="dropdown-item" href="#">15 min.</a>
                                        <a className="dropdown-item" href="#">5 min.</a>
                                    </div>
                                </div>
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
                        <div className="bottomDiv">
                            <button type="button" className="btn btn-secondary fithButton">Enable notifcations</button>
                            <button type="button" className="btn btn-secondary sixthButton">Add currency</button>
                        </div>
                        
                    </div>
                    <div className="col">
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
                          
        </div>;
    }
}