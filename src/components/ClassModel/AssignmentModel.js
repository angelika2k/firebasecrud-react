import React from "react";
import './Model.css';

export const AssignmentModel = ({ show, close }) => {
    return (
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
                <h4>Contact</h4>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>This is a contact model </h4>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">close</button>
                </div>
            </div>
        </div>
    )
};