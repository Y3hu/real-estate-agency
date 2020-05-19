import React from "react"

import styles from '../manager-properties.module.scss'

const StateDrop = ({ label, options, htmlFor, ...others }) => (
    <div className="col-auto">
        <label className="sr-only" htmlFor={htmlFor}>{label}</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <div className={`input-group-text ${styles.labels_to_left}`}>{label}</div>
            </div>

            <select htmlFor={htmlFor} className="form-control" {...others}>
                {options.map(([value, name]) => (
                    <option value={value}>{name}</option>
                ))}
            </select>
        </div>

    </div>

)

export default StateDrop

/**
<div className="col-auto">
    <label className="sr-only" htmlFor="inlineInputLastName">Category</label>
    <div className="input-group mb-2">
        <div className="input-group-prepend">
            <div className={`input-group-text ${styles.labels_to_left}`}>Category</div>
        </div>
        <select className="form-control">
            <option>Default select</option>
        </select>
    </div>
</div>
 */