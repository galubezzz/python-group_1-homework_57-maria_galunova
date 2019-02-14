import React from 'react';

const Alert = (props) => {

    return(
        <div className={props.show ? ("alert alert-dismissible fade show alert-" + props.type) : ("alert alert-dismissible fade alert-" + props.type)} role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                {props.close && <button type="button" className="close" aria-label="Close" onClick={setTimeout(props.close, props.timer)}>
                <span aria-hidden="true">&times;</span>
            </button>}
        </div>
    );
}

export default Alert;