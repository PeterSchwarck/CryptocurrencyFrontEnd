import Flux from '@4geeksacademy/react-flux-dash';
import MyStore from '../stores/MyStore';

const HOST = 'https://final-project-backend-peterschwarck.c9users.io';

class MyActions extends Flux.Action{
    
    setupNotification(info){
        //do whatever your like... and then...
    
       fetch(HOST + '/notification/', {
            method:'POST',
            body: JSON.stringify({
                    email: "dave@gmallklkoklil.com",
                    phone:{},
                    volume_delta:{},
                    price_delta:"7864445566",
                    coin:"7864445566"
            }),
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'applications/json'
            }
    
            })
            .then(response => response.json())
            .then((json) => {
                   // Dispatch to the store
                   this.dispatch("MyStore.newNotification", json);
            })
            .catch(error => error);
        
        
        
        
        
        this.dispatch(
            'MyStore.setNotificationInfo', info//data to send to the store
        );
    }
    
    getCoinsfromHitBtc(){
        console.log("TRYing");
        
        fetch('https://api.hitbtc.com/api/2/public/currency')
            .then(response => response.json())
            .then((json) => {
                console.log("it worked:");
                console.log(json);
                   // Dispatch to the store
                   this.dispatch("MyStore.setCoins", json);
            })
            .catch(error => error);
        
    }
    
    addSettings(setting, delta){
        
        let settings = MyStore.getSettings();
        settings.setting=setting;
        settings.delta=delta;
        this.dispatch('MyStore.setSetting', settings);
        
        
    }
    
    addAllTheInfo(phone, email, notificationList){
        console.log("I am in the actions", notificationList);
        console.log("I am in the actions", phone);
        console.log("I am in the actions", email);
        
    } 
    
    
}




export default new MyActions();