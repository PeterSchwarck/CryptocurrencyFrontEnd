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
                coin: "btc",
                volume_delta: "20%",
                price_delta: "20%",
            }
        };
    }

    _setNotificationInfo(info) {
        this.setStoreState({
            notificationInfo: info
        }).emit();
    }

    getNotificationInfo() {
        return this.state.notificationInfo;
    }

    _newNotification(data) {
        this.setStoreState({
            //
        }).emit();
    }
}
export default new MyStore();