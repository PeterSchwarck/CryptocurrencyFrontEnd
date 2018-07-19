import React from 'react';

import PropTypes from 'prop-types';

export class ListItem extends React.Component{

    render(){
        return <table className="thaTable">
                <tr>
                    <td>Coin 1</td>
                    <td className="badge badge-success">+10%</td>
                    <td className="badge badge-danger">-25%</td>
                    <button onClick={() => this.props.onDelete()} type="button" className="btn btn-light trash mrTrash">
                        <i className="far fa-trash-alt"></i>
                    </button>
                </tr>
            </table>;
    }
}

ListItem.propTypes = {
  onDelete: PropTypes.func
};
