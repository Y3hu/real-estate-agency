import React from 'react'

import styles from './properties.module.scss'

const DropdownComponent = ({ name, options }) => {

    return (
        <div className={`btn-group ${styles.dropdown}`}>
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {name}
            </button>
            <div style={{maxWidth: "10vw"}} class={`dropdown-menu ${styles.dropdown_menu}`}>
                {
                    options.map((opt, i) => (
                        <button key={i} className="dropdown-item" type="button">{opt}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default DropdownComponent