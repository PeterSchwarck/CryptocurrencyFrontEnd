import React from 'react';



export class NotificationCard extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        };
    }
    
    hideCard() {
        this.setState((prevState) => ({
            show: false
        }));
    }
    
    
    
    
    render(){
        return <div className="notificationcard vertical-center" >
            <div className="col-12 col-lg-6 col-md-8 mx-auto" style={{display: (this.state.show) ? 'inline-block' : 'none'}}>
                <div className="card-body">
                    <button onClick={() => this.hideCard()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="header">
                        <h5 className="card-title">(Name of Cryptocurrency)</h5>
                    </div>
                    <div className="badges">
                        <p></p> 
                        <span className="badge badge-info-marketCap">Market cap range</span><span className="badge badge-light">10 M</span>
                        <span>
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-trash-alt">
                                </i>
                            </button>
                        </span>
                        
                        <span>
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-edit">
                                </i>
                            </button>
                        </span>
                        <p></p>
                        <div className="threeBadgeDiv">
                            <span className="badge badge-success">Volume</span><span className="badge badge-light"><i className="fas fa-caret-up"></i> 15%</span>
                            <span className="badge badge-danger">Market cap 15 min.</span><span className="badge badge-light"><i className="fas fa-caret-down"></i> 5%</span>
                            <span className="badge badge-warning">Price 5 min.</span><span className="badge badge-light">0</span>
                        </div>
                        <p></p>
                    </div>    
                    <div>
                        <a className="btn btn-success btn-md" href="#" role="button">  Ok  </a> 
                        <button onClick={() => this.hideCard()} className="btn btn-secondary btn-md" href="#" role="button">Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>;
    }
}


