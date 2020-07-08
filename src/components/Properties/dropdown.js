import React from 'react'

import styles from './properties.module.scss'

const DropdownComponent = ({ name, options, func }) => {

    const filter = f => {

        switch (f) {
            case "comercial": func("commercial")
                break;
            case "residencial": func("residential")
                break;
            case "desarrollos": func("developments")
                break;
            case "alquileres": func("rentals")
                break;
            case "terrenos/lotes": func("land/lots")
                break;
            default: func(f.toString().toLowerCase())
                break;
        }
    }

    return (
        <div className={`btn-group ${styles.dropdown}`}>
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {name}
            </button>
            <div className={`dropdown-menu dropdown-menu-lg-right ${styles.dropdown_menu}`}>
                {
                    options.map((opt, i) => (
                        <button key={i} className="dropdown-item" type="button" onClick={() => filter(opt)}>{opt}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default DropdownComponent