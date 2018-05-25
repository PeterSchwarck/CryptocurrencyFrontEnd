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
                     <nav className="navbar navbar-light bg-light">
                         <a className="navbar-brand" href="#">Navbar</a>
                     </nav>
                     <div className="card text-center">
                         <div className="card-header">
                             <img className='image bitcoin' src='https://thumbs.dreamstime.com/b/golden-bitcoin-coin-symbol-golden-bitcoin-coin-crypto-currency-golden-coin-bitcoin-symbol-transparent-background-realistic-103331395.jpg'></img>
                             Low cap scalp scanner
                         </div>
                        
                         <div className="card-body border border-secondary">
                             <div className='container-fluid'>
                                 <div className='row'>
                                     <div className='col-5'>
                                         <Dropdown />
                                     </div>
                                     <div className='col-5'>
                                         <Dropdown />
                                     </div>
                                     <div className='col-2'>
                                         <img className='image plus' src='http://www.clker.com/cliparts/2/f/6/1/11949856271997454136tasto_2_architetto_franc_01.svg.hi.png'></img>
                                     </div>
                                 </div>
                             </div> 
                             <div className='container-fluid'>
                                 <div className='row'>
                                     <div className='col-3'>
                                         <Dropdown />
                                     </div>
                                     <div className='col-3'>
                                         <Dropdown />
                                     </div>
                                     <div className='col-3'>
                                         <Dropdown />
                                     </div>
                                     <div className='col-3'>
                                        
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