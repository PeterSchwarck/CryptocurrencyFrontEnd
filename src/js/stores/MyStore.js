import React from 'react';

import Flux from '@4geeksacademy/react-flux-dash';

class MyStore extends Flux.Store {

    constructor() {
        super();
        this.state = {
            notificationInfo: {
                phone: null,
                email: null
            },
            notification: {
                setting: '',
                delta: ''
                
            },
            coins: [],
            menuItem: [],
            notificationList: [],
            updateMenuItem: []
        };
    }

    _setNotificationInfo(info) {
        this.setStoreState({
            notificationInfo: info
        }).emit();
    }
    
    _setSetting(value){
        this.setStoreState({
            notfication : value
        }).emit();
        console.log(this.state.notification);
    }
    
    getSettings(){
        return this.state.notification;
    }

    getNotificationInfo() {
        return this.state.notificationInfo;
    }

    _newNotification(data) {
        this.setStoreState({
            //
        }).emit();
    }
    
    _setCoins(coins){
        this.setStoreState({ coins }).emit();
    }
    
    getCoins(){
        return this.state.coins;
    }
    
    setMenuItem(updateMenuItem){
        this.setStoreState({
            menuItem: updateMenuItem
        }).emit();
        console.log("Im in the store");
    }
    
    getMenuItems(){
        return this.state.updateMenuItem;
    }
    
    
}
export default new MyStore();