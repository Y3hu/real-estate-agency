import React from "react"

import ItemForm from "./ItemForm"
import StateDrop from './StateDrop'

import styles from '../manager-properties.module.scss'

const propertyTypeOptions = [
    ["sale", "For Sale"],
    ["pending", "Pending"],
    ["rent", "For Rent"],
    ["lease", "For Lease"]
]

const categoryOptions = [
    ["residential", "Residential"],
    ["land/lots", "Land/Lots"],
    ["commercial", "Commercial"],
    ["developments", "Developments"],
    ["rentals", "Rentals"]
]

const Names = ({ setForm, formData }) => {
    const { listingCode, listingDate, propertyType, category, propertyTitle, price, originalPrice, description } = formData

    return (

        <div className="form align-items-center">
            <ItemForm
                label="Listing Code"
                name="listingCode"
                value={listingCode}
                onChange={setForm}
            />
            <ItemForm
                label="Listing Date"
                name="listingDate"
                value={listingDate}
                onChange={setForm}
            />
            <StateDrop label="Propertie Type" name="propertyType" options={propertyTypeOptions} value={propertyType} onChange={setForm} />
            <StateDrop label="Category" name="category" options={categoryOptions} value={category} onChange={setForm} />
            <ItemForm
                label="Property Title"
                name="propertyTitle"
                value={propertyTitle}
                onChange={setForm}
            />
            <ItemForm
                label="Price"
                name="price"
                value={price}
                type="number"
                onChange={setForm}
            />
            <ItemForm
                label="Original Price"
                name="originalPrice"
                type="number"
                value={originalPrice}
                onChange={setForm}
            />

            <div className="col-auto">
                <label className="sr-only" htmlFor="inlineInputMessage">Description</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className={`input-group-text ${styles.labels_to_left}`}>Description</div>
                    </div>
                    <textarea name="description" className={`form-control ${styles.input_size}`} onChange={setForm} value={description} id="inlineInputMessage" rows="4"></textarea>
                </div>
            </div>

        </div>

    )
}

export default Names