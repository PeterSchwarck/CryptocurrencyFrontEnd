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

import {MarketCapDropDown} from '../components/MarketCapDropDown';

import ReactAutocomplete from 'react-autocomplete';

import MyStore from '../stores/MyStore';

import MyActions from '../actions/MyActions';

export class HomeEdit extends Flux.View {
    constructor(){
        super();
            this.state = {
                showNotificationModal: false,
                showAlertSaved: false,
                showSavedNotifications: false,
                showAddCurrencyButton: false,
                currentTypedCoinName:'',
                coins: [],
                filteredCoins: []
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
    
    handleClear() {
        this.setState({
            suggestions: []
        });
    }
    
    handleChange(input) {
        this.setState({
            suggestions: this.state.suggestions.filter(word => word.startsWith(input))
        });
    }
    
    handleSelection(value) {
        if (value) {
            console.info(`Selected "${value}"`);
        }
    }
    
    handleSearch(value) {
        if (value) {
            console.info(`Searching "${value}"`);
        }
    }
    
    suggestionRenderer(suggestion, searchTerm) {
        return (
            <span>
                <span>{searchTerm}</span>
                <strong>{suggestion.substr(searchTerm.length)}</strong>
            </span>
        );
    }
    
    
    
    componentDidMount(){
        this.bindStore(MyStore,() => {
            this.toggleNotificationModal();
            this.toggleAlertSaved();
            this.toggleSavedNotifications();
            this.toggleAddCurrencyButton();
            const coins = MyStore.getCoins();
            this.setState({
                coins:coins
            });
        });
        MyActions.getCoinsfromHitBtc();
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
                
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="input-group">
                            <div>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <ReactAutocomplete
                                wrapperStyle={{zIndex: 5}}
                                items={this.state.filteredCoins}
                                getItemValue={item => item.fullName}
                                renderItem={(item, highlighted) =>
                                (<div
                                    key={item.id}
                                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                >
                                    {item.fullName}
                                </div>)}
                                    value={this.state.currentTypedCoinName}
                                    onChange={e => {
                                        this.setState({ 
                                            filteredCoins: this.state.coins.filter(c => c.fullName.toLowerCase().indexOf(e.target.value.toLowerCase()) == 0),
                                            currentTypedCoinName: e.target.value
                                        });
                                    }}
                                    onSelect={value => this.setState({ value })}
                            />
                            
                            
                            <div className="dropdown  d-inline-block">
                                <button type="button" className="btn btn-light">
                                    <i className="fa fa-search">
                                    </i>
                                </button>
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
            </div>
            <FooterBar />
            {
                (this.state.showNotificationModal) ? <AddAlert onClose={()=>this.toggleNotificationModal()}  />:''
            }
        </div>;
    }
}