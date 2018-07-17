import React from 'react';

import PropTypes from 'prop-types';

import {ListItem} from '../components/ListItem';


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
                            
                            <ListItem />
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
  onClose: PropTypes.func
};
