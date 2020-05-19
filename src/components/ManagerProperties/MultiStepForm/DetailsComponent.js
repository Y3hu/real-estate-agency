import React from "react"

import ItemForm from "./ItemForm"
import StateDrop from './StateDrop'

import styles from '../manager-properties.module.scss'

const bedsOptions = [
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["+3", "+3"],
]

const bathsOptions = [
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["+3", "+3"],
]

const unitsOptions = [
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["+3", "+3"],
]

const HOAOptions = [
    [true, 'yes'],
    [false, 'no']
]

const Contact = ({ setForm, formData, navigation }) => {
    const { beds, baths, units, year, view, access, H_m2, H_ft2, L_m2, L_acres, HOA } = formData

    const { previous, next } = navigation

    return (

        <div className={styles.details_form_container}>
            <div className={styles.details_form_dropdowns}>

                <StateDrop label="Beds" name="beds" options={bedsOptions} value={beds} onChange={setForm} />
                <StateDrop label="Baths" name="baths" options={bathsOptions} value={baths} onChange={setForm} />
                <StateDrop label="Units" name="units" options={unitsOptions} value={units} onChange={setForm} />
            </div>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tag}>
                    <p>View</p>
                </div>
                <div className={styles.details_form_checks_checks}>

                    <ItemForm label="Lake"
                        name="view.lake"
                        id="ViewLake"
                        htmlFor="ViewLake"
                        checked={view.lake}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Mountain"
                        name="view.mountain"
                        id="ViewMountain"
                        htmlFor="ViewMountain"
                        checked={view.mountain}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="beach"
                        name="view.beach"
                        id="ViewBeach"
                        htmlFor="ViewBeach"
                        checked={view.beach}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="river"
                        name="view.river"
                        id="ViewRiver"
                        htmlFor="ViewRiver"
                        checked={view.river}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="volcano"
                        name="view.volcano"
                        id="ViewVolcano"
                        htmlFor="ViewVolcano"
                        checked={view.volcano}
                        type="checkbox"
                        onChange={setForm} />
                    <ItemForm label="ocean"
                        name="view.ocean"
                        id="ViewOcean"
                        htmlFor="ViewOcean"
                        checked={view.ocean}
                        type="checkbox"
                        onChange={setForm} />
                    <ItemForm label="jungle"
                        name="view.jungle"
                        id="ViewJungle"
                        htmlFor="ViewJungle"
                        checked={view.jungle}
                        type="checkbox"
                        onChange={setForm} />
                </div>
            </div>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tag}>
                    <p>Acces</p>
                </div>
                <div className={styles.details_form_checks_checks}>
                    <ItemForm label="lake"
                        name="access.lake"
                        id="AccessLake"
                        htmlFor="AccessLake"
                        checked={access.lake}
                        type="checkbox"
                        onChange={setForm} />
                    <ItemForm label="river"
                        name="access.river"
                        id="AccessRiver"
                        htmlFor="AccessRiver"
                        checked={access.river}
                        type="checkbox"
                        onChange={setForm} />
                    <ItemForm label="beach"
                        name="access.beach"
                        id="AccessBeach"
                        htmlFor="AccessBeach"
                        checked={access.beach}
                        type="checkbox"
                        onChange={setForm} />
                </div>
            </div>
            <div className={styles.details_form_bottom}>
                <div className={styles.details_form_bottom_inputs}>
                    <ItemForm label="Year Built" name="year" value={year} onChange={setForm} />
                    <ItemForm label="House Building M2" name="H_m2" value={H_m2} onChange={setForm} />
                    <ItemForm label="House Building FT2" name="H_ft2" value={H_ft2} onChange={setForm} />
                    <ItemForm label="Lot Size M2" name="L_m2" value={L_m2} onChange={setForm} />
                    <ItemForm label="Lot Size Acres" name="L_acres" value={L_acres} onChange={setForm} />
                    <StateDrop label="HOA" name="HOA" options={HOAOptions} value={HOA} onChange={setForm} />
                </div>
            </div>

            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>

    )
}

export default Contact

/**
 * <ItemForm label="E-mail" name="email" value={email} onChange={setForm} />
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
*/