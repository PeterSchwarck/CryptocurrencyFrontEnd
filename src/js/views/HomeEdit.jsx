import logoUrl from '../../img/logo/logo.png';

import { Link } from 'react-router-dom';

import React from 'react';

import Flux from '@4geeksacademy/react-flux-dash';

import {AddAlert} from '../components/AddAlert';

import {FooterBar} from '../components/FooterBar';

import {NavBar} from '../components/NavBar';

import {AlertSaved} from '../components/AlertSaved';

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
                showHomeEditToggle: false,
                currentTypedCoinName:'',
                coins: [],
                filteredCoins: [],
                
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
    
    toggleHomeEditToggle(){
        this.setState((prevState) => ({
            showHomeEditToggle: !this.state.showHomeEditToggle
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
    
    
    componentDidMount(){
        this.bindStore(MyStore,() => {
            const coins = MyStore.getCoins();
            this.setState({
                coins:coins,
                
            });
        });
        
        MyActions.getCoinsfromHitBtc();
    }
    
    
    saveAddAlertInfo(phone, email){
        MyActions.addAllTheInfo(phone, email, this.state.notificationList);
        this.toggleAlertSaved();
    }
    
    deleteMenuItems(name){
        MyActions.deleteMenuItems(name);
    }
    
    deleteComponentMenuItem(position){
        const data = this.state.notificationList.filter((obj,i) => i !== position);
        this.setState({notificationList: data});
    }
    
    addComponentMenuItem(position){
        const inputList = this.state.notificationList;
        const alterCriteria = this.state.notificationList.find((obj,i) => i == position);
        
        this.setState({
            notificationList: inputList.concat(Object.assign(alterCriteria, {id: Math.random()}))
        });
    }

    
    render(){
        const listOfNotification = this.state.notificationList.map((item, i) => {
            return <HomeEditToggle key={i} 
                name={item.coinName}
                id={i}
                notificationObject={item}
                onDelete={(id) => {
                                    this.deleteComponentMenuItem(id);
                                }}
                onAddButtonClick={(id) => {
                                    this.addComponentMenuItem(id);
                                }}    
                                
                
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
                        </div>
                    </div>
                </div>
          
                
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto col-centered">
                        <div className="input-group col-centered">
                            <div className="titleHeader">
                                <h3>Enter a Coin to Search:</h3> 
                            
                            </div>
                            <span className='col-center'>
                            <div>
                            <ReactAutocomplete 
                                menuStyle={{
                                    borderRadius: '3px',
                                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    padding: '2px 0',
                                    fontSize: '90%',
                                    position: 'fixed',
                                    overflow: 'auto',
                                    maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
                                    zIndex:9
                                    
                                }}
                                wrapperStyle={{zIndex: 1000}}
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
                                    this.state.notificationList.push({coinName:value});
                                    
                                    this.setState({ 
                                        value : value,

                                        currentTypedCoinName: value,
                                        notificationList: this.state.notificationList
                                        
                                        });

                                    }}
                                   
                            />
                            </div>
                            </span>

                        </div>
                    </div>
                </div>
              
                {listOfNotification}
                 
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="bottomDiv">
                         <button type="button" className="btn btn-secondary fithButton" onClick={() =>{
                                 this.handleAddSettings();
                                 this.toggleNotificationModal();
                                 this.setState({
                                     delta:this.state.delta,
                                     setting:this.state.setting
                                 });
                                 console.log("alert", this.state.notificationList);
                                    
                                }}>Add Alert</button>
                        </div>
                    </div>    
                </div>
            </div>
            
            <FooterBar />
            {
                (this.state.showNotificationModal) ? <AddAlert onClose={()=>this.toggleNotificationModal()} onSave={(phone, email)=>this.saveAddAlertInfo(phone, email)}  />:''
            }
            {
                (this.state.showHomeEditToggle) ? <HomeEditToggle onClose={()=>this.toggleHomeEditToggle()} />: ''
            }
                
        </div>;
    }
}