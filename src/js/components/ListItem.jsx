import React from 'react';

import PropTypes from 'prop-types';

export class ListItem extends React.Component{

    render(){
        return <div className="notificationListItem">
                <table>
                    <tr>
                        <td>Coin 1</td>
                        <td>
                            <span className="badge badge-success">+10%</span>
                        </td>
                        <td>
                            <span className="badge badge-danger">-25%</span>
                        </td>
                        <td>
                            <button onClick={() => this.props.onClose()} type="button" className="btn btn-light trash trashy">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>;
    }
}

ListItem.propTypes = {
  onClose: PropTypes.func
};
