import React from 'react'

const SpinnerComponent = ({ backgroundColor, percent }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-light"
                style={{
                    minWidth: "8rem",
                    minHeight: "8rem",
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                    backgroundColor: !backgroundColor ? "#0e0e95" : "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                role="status"
            >
                <span style={{ color: !backgroundColor ? "white" : "#0e0e95", fontSize: "1.5rem" }}>
                    {
                        (percent) ? percent.toString()
                            : 'Loading...'
                    }
                </span>
            </div>
        </div>
    )
}

export default SpinnerComponent