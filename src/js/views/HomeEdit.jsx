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

import {HomeEditToggle} from '../components/HomeEditToggle';

import ReactAutocomplete from 'react-autocomplete';

import MyStore from '../stores/MyStore';

import MyActions from '../actions/MyActions';

export class HomeEdit extends Flux.View {
    constructor(){
        super();
            this.state = {
                showNotificationModal: false,
                showAlertSaved: false,
                currentTypedCoinName:'',
                coins: [],
                filteredCoins: [],
                setting: 'price_delta',
                delta:'0%',
                notificationList: []
            };
    }
    
    handleAddSettings(){
        MyActions.addSettings(this.state.setting,this.state.delta);
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
    

    dropDownChange(param){
        this.setState({
            setting: param
        });
    }
    
      dropDownChange1(param){
        this.setState({
            delta: param
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
    
    handleAddMenu(){
        MyActions.addMenu();
    }
    
    
    
    componentDidMount(){
        this.bindStore(MyStore,() => {
            this.toggleAlertSaved();
            const coins = MyStore.getCoins();
            this.setState({
                coins:coins,
                menuItem: MyStore.getMenuItem()
            });
        });
        
        MyActions.getCoinsfromHitBtc();
    }
    
    render(){
        const listOfNotification = this.state.notificationList.map((notificationList, i) => {
            return <HomeEditToggle key={i} 
            />;
        });
            
     
            
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
          
                
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto col-centered">
                        <div className="input-group col-centered">
                            <div>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <span className='col-center'>
                            <ReactAutocomplete 
                                style={{width:100}}
                                wrapperStyle={{zIndex: 5}}
                                items={this.state.filteredCoins}
                                getItemValue={item => item.fullName}
                                renderItem={(item, highlighted) =>
                                (<div
                                    key={item.id}
                                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent',
                                             width:100
                                          
                                    }}
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
                                    onSelect={value => {
                                    this.setState({ 
                                        value : value,
                                        currentTypedCoinName: value
                                    });
                                        
                                    }}
                            />
                            </span>
                            <div className="dropdown  d-inline-block">
                            </div>
                        </div>
                    </div>
                </div>    

                {listOfNotification}
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="divBody-edit">
                                
                        </div>
                    </div>
                </div>
               
                        <HomeEditToggle />
                        <HomeEditToggle />
                 
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="bottomDiv">
                         <button type="button" className="btn btn-secondary fithButton" onClick={() =>{
                                 this.handleAddSettings();
                                 this.toggleNotificationModal();
                                    
                                }}>Add Alert</button>
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