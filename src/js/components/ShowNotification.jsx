import React from 'react';

import PropTypes from 'prop-types';

export class ShowNotification extends React.Component {
    render(){
        return <div className="showNotifcation">
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    <div className="numeroUno">
                        <span>
                            <h5>Alerts</h5>
                            <button onClick={() => this.props.onClose()} type="button" className="close" data-dismiss="modal-body" aria-label="Close">
                                <div className="exis" aria-hidden="true">&times;</div>
                            </button>
                        </span>
                    </div>
                </div>
            </div>    
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    <div className="firstNotificationDiv">
                        <table>
                            <tr>
                                <th>Coin</th>
                                <th>Volume</th> 
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                            <tr>
                                <td>Coin 1</td>
                                <td><span className="badge badge-success">5%</span></td>
                                <td><span className="badge badge-danger">-17%</span></td> 
                                <td>
                                    <button onClick={() => this.props.onDelete()} type="button" className="btn btn-light trash two">
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </td>
                             </tr>
                              <tr>
                                <td>Coin 2</td>
                                <td><span className="badge badge-success">10%</span></td>
                                <td><span className="badge badge-danger">-25%</span></td> 
                                <td>
                                    <button onClick={() => this.props.onDelete()} type="button" className="btn btn-light trash two">
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
            </div>
        </div>;
    }
}

ShowNotification.propTypes = {
  onClose: PropTypes.func,
  onDelete: PropTypes.func
};
