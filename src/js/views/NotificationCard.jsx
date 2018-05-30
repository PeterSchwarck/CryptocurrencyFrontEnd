import fontawesome from '@fortawesome/fontawesome';

import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';

import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';

import React from 'react';


    
fontawesome.config = {
autoReplaceSvg: 'nest'
};

fontawesome.library.add(
    faEdit,
    faTrashAlt
);

export class NotificationCard extends React.Component {
    render(){
        return <div className="notificationcard">
            <div className="card w-50">
                <div className="card-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="header">
                        <h5 className="card-title">(Name of Cryptocurrency)</h5>
                    </div>
                    <div className="badges">
                        <p></p>
                        <span className="badge badge-info-marketCap">Market cap</span>
                        <p></p>
                        <span className="badge badge-success">Volume</span><span className="badge badge-light">9</span>
                        <span className="badge badge-danger">Market cap change</span><span className="badge badge-light">9</span>
                        <span className="badge badge-warning">Price</span><span className="badge badge-light">9</span>
                        <span><button type="button" className="btn btn-light">
                            <i className="fas fa-trash-alt">
                            </i>
                        </button>
                        </span>
                        
                        <span><button type="button" className="btn btn-light">
                            <i className="fas fa-edit">
                            </i>
                        </button>
                        </span>
                        <p></p>
                    </div>    
                    <div>
                        <a className="btn btn-success btn-md" href="#" role="button">  Ok  </a> 
                        <a className="btn btn-secondary btn-md" href="#" role="button">Cancel</a> 
                    </div>
                </div>
            </div>    
        </div>;
    }
}


