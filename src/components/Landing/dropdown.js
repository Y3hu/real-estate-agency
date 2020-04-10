import React from 'react'

const DropdownComponent = ({ name, options }) => {

    return(
        <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {name}
            </button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                {
                    options.map((opt,i) =>(
                        <button key={i} className="dropdown-item" type="button">{opt}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default DropdownComponent