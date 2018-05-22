//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Layout from './Layout.jsx';
import {Dropdown} from './components/Dropdown.jsx';
import {Bigbutton} from './components/Bigbutton.jsx';
import {Companyinfo} from './components/Companyinfo.jsx';


class Card extends React.Component{
  render() {
      
         return <div className="container">
             <div className='row'>
                 <div className='col-1'></div>
                 <div className='col-10'>
                     <div className="card text-center">
                         <div className="card-header">
                             <img src='https://www.mundiplumarii.com/en/wp-content/uploads/2017/12/bitcoin-small-e1512565577216.jpg'></img>
                             Crappy Coins!
                         </div>
                         <div className="card-body">
                             <div className='container-fluid'>
                                 <div className='row'>
                                     <div className='col-6'>
                                         <Dropdown />
                                     </div>
                                     <div className='col-6'>
                                         <Dropdown />
                                     </div>
                                 </div>
                             </div> 
                             <div className='container-fluid'>
                                 <div className='row'>
                                     <div className='col-4'>
                                         <Dropdown />
                                     </div>
                                     <div className='col-4'>
                                         <Dropdown />
                                     </div>
                                     <div className='col-4'>
                                         <Dropdown />
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="card-footer text-muted">
                             <Bigbutton />
                         </div>
                         <div>
                             <Companyinfo />
                         </div>
                     </div>
                 </div>
                 <div className='col-1'></div>
             </div>
         </div>;
        
                           
                     
  } 
  
}

    


//render your react application
ReactDOM.render(
    <Card />,
    document.querySelector('#app')
);