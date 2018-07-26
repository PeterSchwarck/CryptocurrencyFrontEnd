import React from 'react';

import PropTypes from 'prop-types';

import {DropDown1} from '../components/dropDown1';

import {DropDown2} from '../components/dropDown2';

import {ReactAutocomplete} from '../views/HomeEdit';

import {withRouter} from 'react-router-dom';

export class HomeEditToggle extends React.Component {
    constructor(){
        super();
            this.state = {};
    }
    
    dropDownChange(param){
        this.setState({
            setting: param
        });
    this.props.notificationObject.setting=param;    
    }
    
    dropDownChange1(param){
        this.setState({
            delta: param
        });
    this.props.notificationObject.delta=param;
        
    }
    
    
    componentDidMount(){
        this.props.notificationObject.test='this is a test';
    }
    

    
    render(){
        return <div className="homeEditToggle"> 
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    <div className="toggleBody">
                        <div className="coinName">
                        <label className="name lead">{this.props.name}</label>
                        </div>
                        <div>
                            <div className="btn-group">
                                <div className="dropdown  d-inline-block">
                                   <DropDown1
                                   onChange={(e) => this.dropDownChange(e)} />
                                </div>
                                <div className="dropdown  d-inline-block">
                                    <DropDown2 
                                    onChange={(e) => this.dropDownChange1(e)} />
                                </div> 
                                <button onClick={() => this.props.onAddButtonClick(this.props.id)} type="button" className="btn btn-light clone">
                                    <i className="far fa-clone"></i>
                                </button>
                                <button onClick={() => this.props.onDelete(this.props.id)} type="button" className="btn btn-light trash two">
                                    <i className="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
}
}


HomeEditToggle.propTypes = {
  onDelete: PropTypes.func,
  notificationList: PropTypes.object,
  onSave: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number,
  notificationObject: PropTypes.object,
  listOfNotification: PropTypes.object,
  identifier: PropTypes.number,
  onClick: PropTypes.func,
  onAddButtonClick: PropTypes.func
 
};

HomeEditToggle.defaultProps = {
  onDelete: null
};
