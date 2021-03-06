import React from 'react'

const ModalComponent =
    ({
        buttonName,
        message,
        classes,
        func,
        userEmail
    }) => {

        return (
            <div>
                <button type="button" className={(classes) ? classes : "btn btn-primary"} data-toggle="modal" data-target="#exampleModal">
                    {buttonName}
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" style={{ color: "#0e0e95" }}>Alert</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ color: "#0e0e95" }}>
                                {message || "..."}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        if (userEmail) func(userEmail)
                                        else func()
                                    }}
                                    data-dismiss="modal"
                                >
                                    Okay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default ModalComponent