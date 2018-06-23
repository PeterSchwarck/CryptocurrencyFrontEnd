import Flux from '@4geeksacademy/react-flux-dash';

class MyActions extends Flux.Action{
    
    setupNotification(info){
        //do whatever your like... and then...
        this.dispatch(
            'MyStore.setNotificationInfo', info//data to send to the store
        );
    }
}




export default new MyActions();