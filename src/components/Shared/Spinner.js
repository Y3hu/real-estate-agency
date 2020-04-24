import React from 'react'

const SpinnerComponent = _ => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-light" style={{width: "8rem", height: "8rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default SpinnerComponent