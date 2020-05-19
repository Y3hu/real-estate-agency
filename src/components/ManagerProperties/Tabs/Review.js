import React from "react"

import styles from '../manager-properties.module.scss'

const Review = ({ setForm, formData, navigation }) => {
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email
    } = formData
    const { go } = navigation

    return (
        <div className={styles.form}>
            <h3>Review your data</h3>
            <h4>
                Name
        <button onClick={() => go("general")}>Edit</button>
            </h4>
            <div>
                {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
      </div>
            <div>Nick Name: {`${nickName}`}</div>
            <h4>
                Address
        <button onClick={() => go("location")}>Edit</button>
            </h4>
            <div>
                Address: {`${address}`},
        <br />
        City: {` ${city}`},
        <br />
        State: {`${state}`},
        <br />
        ZIP: {`${zip}`}
            </div>
            <h4>
                Contact
        <button onClick={() => go("details")}>Edit</button>
            </h4>
            <div>
                Phone: {`${phone}`},
        <br />
        E-mail: {`${email}`}
            </div>
            <div>
                <button onClick={() => go("submit")}>Submit</button>
            </div>
        </div>
    )
}

export default Review