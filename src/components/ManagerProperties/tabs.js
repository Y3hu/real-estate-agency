import React, { useState } from 'react'

import styles from './manager-properties.module.scss'

const TabsComponent = _ => {
    let [state, changeState] = useState({
        GENERAL: {
            listingCode: '',
            listingDate: '',
            propertyType: '',
            category: '',
            propertyTitle: '',
            price: 0,
            description: ''
        },
        LOCATION: {
            locationInfo: '',
            street: '',
            suit: '',
            city: '',
            province: '',
            region: '',
            country: ''
        },
        DETAILS: {
            beds: 0,
            baths: 0,
            units: 0,
            view: [],
            acces: [],
            buildingSize: {
                m2: 0,
                ft2: 0
            },
            lotSize: {
                m2: 0,
                acres: 0
            },
            HOA: true
        },
        AMENITIES: {
            general: [],
            features: [],
            community: [],
            other: ''
        },
        ASSETS: {
            images: [],
            video: ''
        }
    })

    const onGeneralChange = e => changeState({ ...state, GENERAL: { ...state.GENERAL, [e.target.name]: e.target.value } })
    const onLocationChange = e => changeState({ ...state, LOCATION: { ...state.LOCATION, [e.target.name]: e.target.value } })

    // eslint-disable-next-line
    let isInvalid =
        state.name === '' ||
        state.lastName === '' ||
        state.email === '' ||
        state.message === ''

    return (
        <div className={`row ${styles.tab_container}`}>

            <div className={`list-group ${styles.list_group}`} id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">General Info</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Location Info</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Details</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Amenities</a>
                <a className="list-group-item list-group-item-action" id="list-other-list" data-toggle="list" href="#list-other" role="tab" aria-controls="other">Assets</a>
            </div>

            <div className={`tab-content ${styles.tab_content}`} id="nav-tabContent">
                <div className={`tab-pane fade show active ${styles.tab_pane}`} id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                    <form>
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
                    </form>
                </div>
                <div className={`tab-pane fade ${styles.tab_pane}`} id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <form>
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
                    </form>
                </div>
                <div className={`tab-pane fade ${styles.tab_pane}`} id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                    <form>
                        <div className={styles.details_form_container}>
                            <div className={styles.details_form_dropdowns}>
                                <div className="col-auto">

                                    <label className="sr-only" htmlFor="validationTooltip04">Beds</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className={`input-group-text ${styles.labels_to_left}`}>Beds</div>
                                        </div>

                                        <select className="custom-select" id="validationTooltip04" required defaultValue="Choose...">
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-auto">

                                    <label className="sr-only" htmlFor="validationTooltip04">Beds</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className={`input-group-text ${styles.labels_to_left}`}>Beds</div>
                                        </div>

                                        <select className="custom-select" id="validationTooltip04" required defaultValue="Choose...">
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-auto">

                                    <label className="sr-only" htmlFor="validationTooltip04">Beds</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className={`input-group-text ${styles.labels_to_left}`}>Beds</div>
                                        </div>

                                        <select className="custom-select" id="validationTooltip04" required defaultValue="Choose...">
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.details_form_checks_container}>
                                <div className={styles.details_form_checks_tag}>
                                    <p>View</p>
                                </div>
                                <div className={styles.details_form_checks_checks}>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="lake" />
                                        <label className="custom-control-label" for="lake">Lake</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="mountain" />
                                        <label className="custom-control-label" for="mountain">Mountain</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="beach" />
                                        <label className="custom-control-label" for="beach">Beach</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="river" />
                                        <label className="custom-control-label" for="river">River</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="volcano" />
                                        <label className="custom-control-label" for="volcano">Volcano</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="ocean" />
                                        <label className="custom-control-label" for="ocean">Ocean</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="jungle" />
                                        <label className="custom-control-label" for="jungle">Jungle</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.details_form_checks_container}>
                                <div className={styles.details_form_checks_tag}>
                                    <p>Acces</p>
                                </div>
                                <div className={styles.details_form_checks_checks}>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="lake" />
                                        <label className="custom-control-label" for="lake_access">Lake Access</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="river_frontage" />
                                        <label className="custom-control-label" for="river_frontage">River Frontage</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="beach_front" />
                                        <label className="custom-control-label" for="beach_front">Beach Front</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.details_form_bottom}>
                                <div className={styles.details_form_bottom_inputs}>
                                    <div className="col-auto">
                                        <label className="sr-only" htmlFor="inlineFormName">M2</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className={`input-group-text ${styles.labels_to_left}`}>M2</div>
                                            </div>
                                            <input type="text" name="m2" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.listingCode || ''} id="inlineFormName" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <label className="sr-only" htmlFor="inlineFormName">FT2</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className={`input-group-text ${styles.labels_to_left}`}>FT2</div>
                                            </div>
                                            <input type="text" name="ft2" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.listingCode || ''} id="inlineFormName" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <label className="sr-only" htmlFor="inlineFormName">Size</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className={`input-group-text ${styles.labels_to_left}`}>Size</div>
                                            </div>
                                            <input type="text" name="size" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.listingCode || ''} id="inlineFormName" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <label className="sr-only" htmlFor="inlineFormName">HOH</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className={`input-group-text ${styles.labels_to_left}`}>HOH</div>
                                            </div>
                                            <input type="text" name="hoh" className={`form-control ${styles.input_size}`} onChange={onGeneralChange} value={state.GENERAL.listingCode || ''} id="inlineFormName" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {state.error && <p>{state.error.message}</p>}
                </div>
                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    <form>
                        <div className={styles.details_form_container}>
                            <div className={styles.details_form_checks_container}>
                                <div className={styles.details_form_checks_tag}>
                                    <p>General</p>
                                </div>
                                <div className={styles.details_form_checks_checks}>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="electricity" />
                                        <label className="custom-control-label" for="electricity">Electricity</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="internet" />
                                        <label className="custom-control-label" for="internet">Internet</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cable" />
                                        <label className="custom-control-label" for="cable">Cable</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="satellite" />
                                        <label className="custom-control-label" for="satellite">Satellite</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="heating" />
                                        <label className="custom-control-label" for="heating">Heating</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="water" />
                                        <label className="custom-control-label" for="water">Water</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="hot_water_gas" />
                                        <label className="custom-control-label" for="hot_water_gas">Hot Water Gas</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="hot_water_electricity" />
                                        <label className="custom-control-label" for="hot_water_electricity">Hot Water Electricity</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="central_air" />
                                        <label className="custom-control-label" for="central_air">Central Air</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="central_vac" />
                                        <label className="custom-control-label" for="central_vac">Central Vac</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="air_wall_unit" />
                                        <label className="custom-control-label" for="air_wall_unit">Air Wall Unit</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="ceiling_fans" />
                                        <label className="custom-control-label" for="ceiling_fans">Ceiling Fans</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.details_form_checks_container}>
                                <div className={styles.details_form_checks_tag}>
                                    <p>Features</p>
                                </div>
                                <div className={styles.details_form_checks_checks}>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="electricity" />
                                        <label className="custom-control-label" for="electricity">Electricity</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="internet" />
                                        <label className="custom-control-label" for="internet">Internet</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cable" />
                                        <label className="custom-control-label" for="cable">Cable</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="satellite" />
                                        <label className="custom-control-label" for="satellite">Satellite</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="heating" />
                                        <label className="custom-control-label" for="heating">Heating</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="water" />
                                        <label className="custom-control-label" for="water">Water</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="hot_water_gas" />
                                        <label className="custom-control-label" for="hot_water_gas">Hot Water Gas</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="hot_water_electricity" />
                                        <label className="custom-control-label" for="hot_water_electricity">Hot Water Electricity</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="central_air" />
                                        <label className="custom-control-label" for="central_air">Central Air</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="central_vac" />
                                        <label className="custom-control-label" for="central_vac">Central Vac</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="air_wall_unit" />
                                        <label className="custom-control-label" for="air_wall_unit">Air Wall Unit</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="ceiling_fans" />
                                        <label className="custom-control-label" for="ceiling_fans">Ceiling Fans</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="list-other" role="tabpanel" aria-labelledby="list-other-list">
                    Other
                </div>
            </div>

        </div>
    )
}

export default TabsComponent