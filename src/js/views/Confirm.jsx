import React from 'react';

export class Confirm extends React.Component {
    render(){
        
        
        return <div className="confirm">
            <div className="modal" tabIndex="-1" role="dialog" style={{display: 'block'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Noitification saved.</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn btn-success btn-lgy">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
