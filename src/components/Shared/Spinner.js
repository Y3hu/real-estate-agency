import React from 'react'

const SpinnerComponent = ({ backgroundColor, language }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-light"
                style={{
                    minWidth: "8rem",
                    minHeight: "8rem",
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                    backgroundColor: !backgroundColor ? "#FFF" : "#0e0e95",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                role="status"
            >
                <span style={{ color: !backgroundColor ? "#0e0e95" : "#FFF", fontSize: "1.5rem" }}> {!language ? 'Loading...' : 'Cargando...'} </span>
            </div>
        </div>
    )
}

export default SpinnerComponent