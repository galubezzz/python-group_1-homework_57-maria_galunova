import React from 'react';
import Backdrop from "../Backdrop/Backdrop";


const Modal = props => {
    function onBackdropClick(event) {
       console.log('here i am');
       event.preventDefault();
       event.stopPropagation();
       props.close();
    }
    return (

        <div>
            <Backdrop show={props.show} cancel={props.close}/>
            <div className={props.show ? "modal fade show" : "modal fade"}
                 style={{ display: props.show ? "block" : "none", width: "500px", margin: "0 auto", height: "235px",}}
                 tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button type="button" className="close"  aria-label="Close" onClick={props.close}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{props.text}</p>
                        </div>
                        <div className="modal-footer">
                            {props.buttons.map(button => <button type="button" className={"btn btn-" + button.type} onClick={button.clicked}>{button.label}</button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}


export default Modal;