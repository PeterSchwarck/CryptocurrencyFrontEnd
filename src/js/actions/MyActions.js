import Flux from '@4geeksacademy/react-flux-dash';
import MyStore from '../stores/MyStore';

const HOST = 'https://final-project-backend-peterschwarck.c9users.io';

class MyActions extends Flux.Action{
    
    
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
        
         fetch(HOST + '/notification/', {
            method:'POST',
            body: JSON.stringify({
                    email: email ,
                    phone: phone,
                    notificationList
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
        
    } 
    
    deleteMenuItems(name){
        
        fetch(HOST + '/notification/',{
            method: 'DELETE'
        })
            .then(response => response.json())
            .then((json) => {
                let oldMenuItems = MyStore.getMenuItems();
                for(var i = 0; i < oldMenuItems.length; i++) {
                    if(oldMenuItems[i].identifier != name)
                        updateMenuItem.push(oldMenuItems[i]);
                }
                this.dispatch('MyStore.setMenuItem', updateMenuItem);
            })
            .catch(error => error);
        
        let updateMenuItem = [];
        
       
    }
        
        //  fetch(HOST + '/notification/', {
        //     method:'DELETE',
        //     body: JSON.stringify({
        //             name
        //     }),
        //     headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'applications/json'
        //     }
    
        //     })
        //     .then(response => response.json())
        //     .then((json) => {
        //           // Dispatch to the store
        //           this.dispatch("MyStore.newNotification", json);
        //     });
     
        // }

        
    
    
}




export default new MyActions();