import React from 'react'

function Alert(props) {
    const capitalized = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.type)}</strong>:{props.alert.msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => { props.setalert(null) }}></button>
        </div>
    )
}

export default Alert