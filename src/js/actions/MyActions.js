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
                    phone:"7864445566",
                    volume_delta:"7864445566",
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
                   Flux.dispatch("MyStore.newNotification", json);
            })
            .catch(error => error);
        
        
        
        
        
        this.dispatch(
            'MyStore.setNotificationInfo', info//data to send to the store
        );
    }
}

    loadCoins(coin){
        
        fetch('https://api.hitbtc.com/api/2/public/symbol'),{
        method: 'GET'
        
    }




export default new MyActions();