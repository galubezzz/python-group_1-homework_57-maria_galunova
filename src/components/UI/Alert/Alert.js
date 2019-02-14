import React from 'react';

const Alert = (props) => {
    const autoClose = () => {
        if (props.timer > 0) {
            return setTimeout(props.close, props.timer);
        } else {
            return props.close;
        }
    }

    return(
        <div className={props.show ? ("alert alert-dismissible fade show alert-" + props.type) : ("alert alert-dismissible fade alert-" + props.type)} role="alert">
            <strong>Holy guacamole!</strong> {props.children}
                {props.close && <button type="button" className="close" aria-label="Close" onClick={autoClose()}>
                <span aria-hidden="true">&times;</span>
            </button>}
        </div>
    );
}

export default Alert;