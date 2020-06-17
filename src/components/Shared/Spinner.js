import React from 'react'

const SpinnerComponent = ({ backgroundColor = "white" }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-light"
                style={{
                    minWidth: "8rem",
                    minHeight: "8rem",
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                    backgroundColor: backgroundColor
                }}
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default SpinnerComponent