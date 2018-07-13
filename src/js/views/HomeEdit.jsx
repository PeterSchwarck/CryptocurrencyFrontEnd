import logoUrl from '../../img/logo/logo.png';

import React from 'react';
import { Link } from 'react-router-dom';

import Flux from '@4geeksacademy/react-flux-dash';



import {AddAlert} from '../components/AddAlert';

import {FooterBar} from '../components/FooterBar';

import {NavBar} from '../components/NavBar';

import {AlertSaved} from '../components/AlertSaved';

import {ShowNotification} from '../components/ShowNotification';

import {AddCurrencyButton} from '../components/AddCurrencyButton';

import MyStore from '../stores/MyStore';

export class HomeEdit extends Flux.View {
    constructor(){
        super();
            this.state = {
                showNotificationModal: false,
                showAlertSaved: false,
                showSavedNotifications: false,
                showAddCurrencyButton: false
                // setting: 'Price'
            };
    }
    
    toggleNotificationModal() {
        this.setState((prevState) => ({
            showNotificationModal: !this.state.showNotificationModal
        }));
    }
    
    toggleAlertSaved(){
        this.setState((prevState) => ({
            showAlertSaved: !this.state.showAlertSaved
        }));
    }
    
    toggleSavedNotifications(){
        this.setState((prevState) => ({
            showSavedNotifications: !this.state.showSavedNotifications
        }));
    }
    
    toggleAddCurrencyButton(){
        this.setState((prevState) => ({
            showAddCurrencyButton: !this.state.showAddCurrencyButton
        }));
    }
    
    dropDownChange(param){
        this.setState({
            setting: param
        });
    }
    
    componentDidMount(){
        this.bindStore(MyStore,() => {
            this.toggleNotificationModal();
            this.toggleAlertSaved();
            this.toggleSavedNotifications();
            this.toggleAddCurrencyButton();
        });
    }
    
    render(){
        return <div className="homeEdit">
            <NavBar />
            {
                (this.state.showAlertSaved) ? <AlertSaved onClose={()=>this.toggleAlertSaved()} />: ''
            }
            <div className="containerDiv container">
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                        <div className="topDiv">
                            <img className="logoImg" src={logoUrl}></img><div className="title">CrappyCoin</div>
                            {
                                (this.state.showAddCurrencyButton) ? <AddCurrencyButton onClose={()=>this.toggleAddCurrencyButton()} />: ''
                            }
                        </div>
                    </div>
                </div>
                {
                    (this.state.showSavedNotifications) ? <ShowNotification onClose={()=>this.toggleSavedNotifications()} />: ''
                }
                {this.props.show ? (
                <div className={"row modal fade " + (this.props.show ? "show" : "")}> 
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="input-group">
                            <div>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <input className="searchBar-edit" type="text" placeholder=" Search..." id="myInput" onKeyUp="filterFunction()"></input>
                            <button type="button" className="btn btn-light">
                                <i className="fa fa-search">
                                </i>
                            </button>
                            <div className="dropdown  d-inline-block">
                                <button className="btn btn-secondary dropdown-toggle firstbutton" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Market cap range
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">1 Million</a>
                                    <a className="dropdown-item" href="#">1 - 10 Million</a>
                                    <a className="dropdown-item" href="#">10 - 19 Million</a>
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
                                <button type="button" className="btn btn-secondary fithButton" onClick={() => this.toggleNotificationModal()}>Enable notifcations</button>
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
                        </div>
                    </div>    
                </div>
                ) : ""}
            </div>
            <FooterBar />
            {
                (this.state.showNotificationModal) ? <AddAlert onClose={()=>this.toggleNotificationModal()}  />:''
            }
        </div>;
    }
}