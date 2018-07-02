import React from 'react';


export class ShowNotification extends React.Component {
    

    render(){
        return <div className="showNotifcation">
            <div className="containerDiv container">
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="input-group">
                            <span>
                                <h3>(Name of Cryptocurrency)</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </span>
                            
                        </div>
                    </div>
                </div>    
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="divBody-edit">
                            <div className="btn-group">
                                <div className="dropdown  d-inline-block">
                                    <button className="btn btn-secondary dropdown-toggle secondButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Settings
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Volume</a>
                                        <a className="dropdown-item" href="#">Price</a>
                                    </div>
                                </div>
                                <div className="dropdown  d-inline-block">
                                    <button className="btn btn-secondary dropdown-toggle thirdButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Delta
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">30%</a>
                                        <a className="dropdown-item" href="#">20%</a>
                                        <a className="dropdown-item" href="#">10%</a>
                                        <a className="dropdown-item" href="#">5%</a>
                                        <a className="dropdown-item" href="#">0%</a>
                                        <a className="dropdown-item" href="#">-5%</a>
                                        <a className="dropdown-item" href="#">-10%</a>
                                        <a className="dropdown-item" href="#">-20%</a>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-secondary fithButton" onClick={() => this.toggleNotificationModal()}>Enable notifcations</button>
                                <button type="button" className="btn btn-light plus">
                                    <i className="fas fa-plus-circle">
                                    </i>
                                </button>
                                <button type="button" className="btn btn-light trash">
                                    <i className="fas fa-trash-alt">
                                    </i>
                                </button>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        </div>;
    }
}