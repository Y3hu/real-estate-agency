import React from "react"

import styles from './tabs.module.scss'

const StateDrop = ({ label, options, htmlFor, ...others }) => (
    <div style={{ width: "100%" }}>
        <label className="sr-only" htmlFor={htmlFor}>{label}</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <div className={`input-group-text ${styles.labels_to_left}`}>{label}</div>
            </div>

            <select htmlFor={htmlFor} className="form-control" {...others} >
                {options.map(([value, name]) => (
                    <option key={value} value={value}>{name}</option>
                ))}
            </select>
        </div>

    </div>

)

export default StateDrop