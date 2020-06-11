import React from 'react'

const AlertComponent = ({ message }) => {

    return (
        <div className="alert alert-success" role="alert">
            {message}
        </div>
    )
}

export default AlertComponent