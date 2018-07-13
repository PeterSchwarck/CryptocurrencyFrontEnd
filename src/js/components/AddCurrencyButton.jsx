import React from 'react';

import PropTypes from 'prop-types';


export class AddCurrencyButton extends React.Component {
    

    render(){
        return <div className="addCurrency">
            <div className="currencyDiv">
                <button onClick={() => this.props.onClose()} type="button" className="btn btn-secondary sixthButton">Add currency</button>
            </div>
        </div>;
    }
}

AddCurrencyButton.propTypes = {
  onClose: PropTypes.func
};


