import React from "react"

import styles from './tabs.module.scss'

const ItemForm = ({ label, htmlFor, children, type = "text", ...otherProps }) => (


    (type === "text" || type === "number") ? (
        <div className="col-md-6 mb-3">
            <label className="sr-only" htmlFor={htmlFor}>{label}</label>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className={`input-group-text ${styles.labels_to_left}`}>{label}</div>
                </div>
                <input type={type} {...otherProps} className={`form-control ${styles.input_size}`} id={htmlFor} />
            </div>
        </div>
    )
        :
        (
            <div className="custom-control custom-checkbox">
                <input className="custom-control-input" type={type} {...otherProps} />
                <label className="custom-control-label" htmlFor={htmlFor}>{label}</label>
            </div>

        )


)

export default ItemForm