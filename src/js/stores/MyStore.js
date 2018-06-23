import React from 'react';

import Flux from '@4geeksacademy/react-flux-dash';

class MyStore extends Flux.Store{
    
    constructor(){
        super();
        this.state = {
            notificationInfo:  { 
                phone: null,
                email: null
            },
            coins: []
        };
    }
    
    _setNotificationInfo(info){
        this.setStoreState({
            notificationInfo: info
        }).emit();
    }
    
    getNotificationInfo(){
        return this.state.notificationInfo;
    }
}
export default new MyStore();