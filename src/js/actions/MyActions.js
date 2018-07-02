import Flux from '@4geeksacademy/react-flux-dash';

class MyActions extends Flux.Action{
    
    setupNotification(info){
        //do whatever your like... and then...
        
       fetch('http://assets.breatheco.de/apis/fake/contact/', {
            method:'put',
            body: JSON.stringify({
                    email: "dave@gmallklkoklil.com",
                    phone:"7864445566"
            }),
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'applications/json'
            }
    
            })
            .then(response => response.json())
            .then((json) => {
                   console.log(json);
            })
            .catch(error => error);
        
        
        
        
        
        this.dispatch(
            'MyStore.setNotificationInfo', info//data to send to the store
        );
    }
}




export default new MyActions();