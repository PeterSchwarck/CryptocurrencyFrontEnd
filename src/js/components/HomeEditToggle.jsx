import React from 'react';

import PropTypes from 'prop-types';

export class HomeEditToggle extends React.Component {
    render(){
        return <div className="homeEditToggle"> 
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    <div className="toggleBody">
                        <div className="btn-group">
                            <div className="dropdown  d-inline-block">
                                   DROPDOWN
                                </div>
                                <div className="dropdown  d-inline-block">
                                    DROPDOWN
                                </div>
                                <button onClick={() =>this.handleAddMenu()} type="button" className="btn btn-light plus">
                                <i className="fas fa-plus-circle">
                                </i>
                            </button>
                        </div>    
                    </div>
                </div>
            </div>
        </div>;
}
}

HomeEditToggle.propTypes = {
  onDelete: PropTypes.func
};
