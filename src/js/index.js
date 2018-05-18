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


class Card extends React.Component{
  render() {
      
         return <div className="container">
             <div className='row'>
                 <div className='col-2'></div>
                 <div className='col-8'>
                     <div className="card">
                         <div className="card-body">
                             <h5 className="card-title">Card title</h5>
                             <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                             
                             <a href="#" className="card-link">Card link</a>
                            
                         </div>
                     </div>  

                    
                 </div>
                 <div className='col-2'></div>
             </div>
         </div>;
  } 
  
}

    


//render your react application
ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);