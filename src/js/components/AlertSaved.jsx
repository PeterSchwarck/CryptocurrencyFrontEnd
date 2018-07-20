import React from 'react';

import PropTypes from 'prop-types';

export class AlertSaved extends React.Component {
    render(){
        return(<div>
            <button onClick={() => this.props.onClose()} className="alert alert-success alertSaved" role="alert" style={{textAlign: "center"}}>
                Notitification Saved!
                <button type="button" className="closeAlert">
                    <span aria-hidden="true">&times;</span>
                </button>
            </button>
        </div>
        );
    }
}

AlertSaved.propTypes = {
  onClose: PropTypes.func
};