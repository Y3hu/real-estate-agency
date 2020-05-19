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
    ["acreage", "Acreage"],
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

/**<form>
                        <div className="form align-items-center">
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormName">Listing Code</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className={`input-group-text ${styles.labels_to_left}`}>Listing Code</div>
                                    </div>
                                    <input type="text" name="listingCode" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.listingCode || ''} id="inlineFormName" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineInputLastName">Listing Date</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className={`input-group-text ${styles.labels_to_left}`}>Listing Date</div>
                                    </div>
                                    <input type="text" name="listingDate" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.listingDate || ''} id="inlineInputLastName" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineInputLastName">Property Type</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className={`input-group-text ${styles.labels_to_left}`}>Property Type</div>
                                    </div>
                                    <select className="form-control">
                                        <option>Default select</option>
                                    </select>
                                </div>
                            </div>
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
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineInputLastName">Property Title</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className={`input-group-text ${styles.labels_to_left}`}>Property Title</div>
                                    </div>
                                    <input type="text" name="propertyTitle" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.propertyTitle || ''} id="inlineInputLastName" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineInputLastName">Price</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className={`input-group-text ${styles.labels_to_left}`}>Price</div>
                                    </div>
                                    <input type="number" name="price" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.price || ''} id="inlineInputLastName" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineInputMessage">Description</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className={`input-group-text ${styles.labels_to_left}`}>Description</div>
                                    </div>
                                    <textarea name="description" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.description || ''} id="inlineInputMessage" rows="4"></textarea>
                                </div>
                            </div>
                            {state.error && <p>{state.error.message}</p>}
                        </div>
                    </form> */