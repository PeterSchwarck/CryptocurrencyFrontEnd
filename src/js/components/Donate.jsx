import PropTypes from 'prop-types';
import React from 'react';

export class Donate extends React.Component{ 
    render(){
        return(<div className="donateModal">
            <div className={"modal fade " + (this.props.show ? "show" : "")} id="exampleModal" role="dialog" style={{display: this.props.show ? "block" : "", background: "rgba(0,0,0,0.5)"}}>
                <div className="modal-dialog" role="document">
                    {this.props.show ? (
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Donate to CrappyCoin</h5>
                                <button onClick={() => this.props.onClose()} type="button" className="closeDonate" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            Pobrecito yo Pobrecito yo
                            </div>
                            <div className="qrCode">
                                <img src="https://chart.googleapis.com/chart?chl=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer%2Fhomepage%2Fsend&chs=200x200&cht=qr&chld=H%7C0" alt="money" height="" width="">
                                </img>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => this.props.onClose()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                ) : ""}
                </div>
            </div>
        </div>
        );
    }
}// JavaScript File

Donate.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool
};
