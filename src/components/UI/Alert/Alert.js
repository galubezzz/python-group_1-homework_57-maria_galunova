import React from 'react';

const Alert = (props) => {
    const autoClose = () => {
        if (props.timer > 0) {
            return setTimeout(props.dismiss, props.timer);
        } else {
            return props.dismiss;
        }
    }

    return(
        <div className={props.show ? ("alert alert-dismissible fade show alert-" + props.type) : ("alert alert-dismissible fade alert-" + props.type)}
             onClick={!props.closeType ? props.dismiss : ""}>
            <strong>Holy guacamole!</strong> {props.children}
                {props.dismiss && props.closeType && <button type="button" className="close" aria-label="Close" onClick={autoClose()}>
                <span aria-hidden="true">&times;</span>
            </button>}
        </div>
    );
}

export default Alert;