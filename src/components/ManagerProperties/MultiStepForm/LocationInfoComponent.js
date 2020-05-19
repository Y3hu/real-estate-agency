import React from "react"

import ItemForm from "./ItemForm"

import styles from '../manager-properties.module.scss'

const Address = ({ setForm, formData, navigation }) => {
    const { street, city, province, region, country } = formData

    const { previous, next } = navigation

    return (
        <div className={styles.details_form_container}>
            <div className="form align-items-center">
                <h3>Location Information</h3>
                <ItemForm label="Street Address" name="street" value={street} onChange={setForm} />
                <ItemForm label="City" name="city" value={city} onChange={setForm} />
                <ItemForm label="Province" name="province" value={province} onChange={setForm} />
                <ItemForm label="Region" name="region" value={region} onChange={setForm} />
                <ItemForm label="Country" name="country" value={country} onChange={setForm} />
                <div>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
                </div>
            </div>
        </div>

    )
}

export default Address

/**
<div className="form align-items-center">
    <div className="col-auto">
        <label className="sr-only" htmlFor="inlineFormName">Location Info</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <div className={`input-group-text ${styles.labels_to_left}`}>Location Info</div>
            </div>
            <input type="text" name="locationInfo" className={`form-control ${styles.input_size}`} onChange={onLocationChange} value={state.LOCATION.locationInfo || ''} id="inlineFormName" />
        </div>
    </div>
    <div className="col-auto">
        <label className="sr-only" htmlFor="inlineInputLastName">Street Address</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <div className={`input-group-text ${styles.labels_to_left}`}>Street Address</div>
            </div>
            <input type="text" name="street" className={`form-control ${styles.input_size}`} onChange={onLocationChange} value={state.LOCATION.street || ''} id="inlineInputLastName" />
        </div>
    </div>
    <div className="col-auto">
        <label className="sr-only" htmlFor="inlineInputLastName">Suite/Apartment #</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <div className={`input-group-text ${styles.labels_to_left}`}>Suite/Apartment #</div>
            </div>
            <input type="text" name="suit" className={`form-control ${styles.input_size}`} onChange={onLocationChange} value={state.LOCATION.suit || ''} id="inlineInputLastName" />
        </div>
    </div>
    <div className="col-auto">
        <label className="sr-only" htmlFor="inlineInputLastName">City</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <div className={`input-group-text ${styles.labels_to_left}`}>City</div>
            </div>
            <input type="text" name="city" className={`form-control ${styles.input_size}`} onChange={onLocationChange} value={state.LOCATION.city || ''} id="inlineInputLastName" />
        </div>
    </div>
    <div className="col-auto">
        <label className="sr-only" htmlFor="inlineInputLastName">Province</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <div className={`input-group-text ${styles.labels_to_left}`}>Province</div>
            </div>
            <input type="text" name="province" className={`form-control ${styles.input_size}`} onChange={onLocationChange} value={state.LOCATION.province || ''} id="inlineInputLastName" />
        </div>
    </div>
    <div className="col-auto">
        <label className="sr-only" htmlFor="inlineInputLastName">Region</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <div className={`input-group-text ${styles.labels_to_left}`}>Region</div>
            </div>
            <input type="text" name="region" className={`form-control ${styles.input_size}`} onChange={onLocationChange} value={state.LOCATION.region || ''} id="inlineInputLastName" />
        </div>
    </div>
    {state.error && <p>{state.error.message}</p>}
</div>
 */