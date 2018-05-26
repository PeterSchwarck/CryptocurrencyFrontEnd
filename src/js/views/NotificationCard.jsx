import fontawesome from '@fortawesome/fontawesome';

import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';

import React from 'react';


    
fontawesome.config = {
autoReplaceSvg: 'nest'
};

fontawesome.library.add(
    faEdit
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
                        <span className="badge badge-primary">Primary</span>
                        <span className="badge badge-success">Success</span>
                        <span className="badge badge-danger">Danger</span>
                        <span className="badge badge-warning">Warning</span>
                        <span className="badge badge-info">Info</span>
                        <span className="badge badge-light">Light</span>
                        <span className="badge badge-dark">Dark</span>
                        <span><button type="button" className="btn btn-light">
                            <i className="fas fa-edit">
                            </i>
                        </button>
                        </span>
                        <p></p>
                    </div>    
                    <div>
                        <a href="#" className="btn btn-secondary">Cancel</a>
                    </div>
                </div>
            </div>    
        </div>;
    }
}


