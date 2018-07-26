import logoUrl from '../../img/logo/logo.png';

import {FooterBar} from '../components/FooterBar';

import {NavBar} from '../components/NavBar';

import Flux from '@4geeksacademy/react-flux-dash';

import React from 'react';

import PropTypes from 'prop-types';

import MyActions from '../actions/MyActions';
    
import MyStore from '../stores/MyStore';


export class ShowNotification extends Flux.View {
        constructor(){
        super();
            this.state = {};
    }
    
    
    deleteMenuItems(name){
        MyActions.deleteMenuItems(name);
        console.log("I'm working");
    }
    
    componentDidMount(){
        this.bindStore(MyStore,() => {
            this.setState({
                menuItem: MyStore.getMenuItems()
                
            });
        });
        
        MyActions.getCoinsfromHitBtc();
    }
    
    
    render(){
        return <div className="homeEdit">
            <NavBar />
            <div className="containerDiv container">
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                        <div className="topDiv">
                            <img className="logoImg" src={logoUrl}></img><div className="title">CrappyCoin</div>
                        </div>
                    </div>
                </div>
                <div className="showNotifcation">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-10 mx-auto">
                            <div className="numeroUno">
                                <span>
                                    <h5>My Alerts</h5>
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
                                            <button onClick={() => this.deleteMenuItems(this.props.name)} type="button" className="btn btn-light trash two">
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
                    <FooterBar />
                </div>
            </div>
        </div>;
    }
}

ShowNotification.propTypes = {
  onClose: PropTypes.func,
  onDelete: PropTypes.func
};

ShowNotification.defaultProps = {
  onDelete: null
};
