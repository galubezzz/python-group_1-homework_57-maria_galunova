import React from 'react';
import Backdrop from "../Backdrop/Backdrop";


const Modal = props => (

    <div>
        <Backdrop show={props.show}/>
        <div className={props.show ? "modal fade show" : "modal fade"}
             style={{ display: props.show ? "block" : "none"}}
             tabIndex="-1"
             role="dialog"
             onClick={props.close}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="close"  aria-label="Close" onClick={props.close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        {props.buttons.map(button => <button type="button" className={"btn btn-" + button.type} onClick={button.clicked}>{button.label}</button>)}
                    </div>
                </div>
            </div>
        </div>
    </div>


);


export default Modal;