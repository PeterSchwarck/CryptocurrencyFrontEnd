import React from 'react';
export class Dropdown extends React.Component{
    render(){
        return(           <div className='col-10'>
                     <nav className="navbar navbar-light bg-light">
                         <a className="navbar-brand" href="#">Navbar</a>
                     </nav>
                     <div className="card text-center border border border-success">
                         <div className="card-header">
                             <img className='image bitcoin' src='https://thumbs.dreamstime.com/b/golden-bitcoin-coin-symbol-golden-bitcoin-coin-crypto-currency-golden-coin-bitcoin-symbol-transparent-background-realistic-103331395.jpg'></img>
                             Low cap scalp helper
                         </div>
                         <div className="card-body">
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
                 </div>;
    }
}
                 