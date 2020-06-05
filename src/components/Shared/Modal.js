import React from 'react'

const ModalComponent =
    ({
        buttonName,
        message,
        classes,
        func
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
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {message || "..."}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => func()}>Okay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default ModalComponent