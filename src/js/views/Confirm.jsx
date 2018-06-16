import PropTypes from 'prop-types';
import React from 'react';

export class Confirm extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    
    hideModal() {
        this.setState((prevState) => ({
            show: false
        }));
    }
    
    
    
    render(){
        
        return <div className="confirm">
            <div className="modal" tabIndex="-1" role="dialog" style={{display: (this.state.show) ? 'inline-block' : 'none'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Noitification saved.</h5>
                            <button onClick={() => this.hideModal()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button onClick={() => this.hideModal()} type="button" className="btn btn-success btn-lgy">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}


