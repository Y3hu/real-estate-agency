import React from "react"

import ItemForm from "./ItemForm"
import StateDrop from './StateDrop'

import styles from './tabs.module.scss'

const HOAOptions = [
    [true, 'yes'],
    [false, 'no']
]

const Contact = ({ setForm, formData }) => {
    const { beds, baths, units, year, view, access, house, lot, HOA } = formData

    const quantityOptions = () => {
        var options = []
        for (let i = 0; i <= 100; i++) {
            options = [...options, [i, i]]
        }
        options = [...options, ["100+", "100+"]]
        return options
    }

    return (
        <form>
            <div className="row">

                <div className={styles.details_form_container}>
                    <div className={styles.details_form_dropdowns}>

                        <div style={{ width: "30%" }}>
                            <StateDrop label="Beds" name="beds" options={quantityOptions()} value={beds} onChange={setForm} />
                        </div>

                        <div style={{ width: "30%" }}>
                            <StateDrop label="Baths" name="baths" options={quantityOptions()} value={baths} onChange={setForm} />
                        </div>

                        <div style={{ width: "30%" }}>
                            <StateDrop label="Units" name="units" options={quantityOptions()} value={units} onChange={setForm} />
                        </div>

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

                            <ItemForm label="Beach"
                                name="view.beach"
                                id="ViewBeach"
                                htmlFor="ViewBeach"
                                checked={view.beach}
                                type="checkbox"
                                onChange={setForm} />

                            <ItemForm label="River"
                                name="view.river"
                                id="ViewRiver"
                                htmlFor="ViewRiver"
                                checked={view.river}
                                type="checkbox"
                                onChange={setForm} />

                            <ItemForm label="Volcano"
                                name="view.volcano"
                                id="ViewVolcano"
                                htmlFor="ViewVolcano"
                                checked={view.volcano}
                                type="checkbox"
                                onChange={setForm} />
                            <ItemForm label="Ocean"
                                name="view.ocean"
                                id="ViewOcean"
                                htmlFor="ViewOcean"
                                checked={view.ocean}
                                type="checkbox"
                                onChange={setForm} />
                            <ItemForm label="Jungle"
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
                            <ItemForm label="Lake"
                                name="access.lake"
                                id="AccessLake"
                                htmlFor="AccessLake"
                                checked={access.lake}
                                type="checkbox"
                                onChange={setForm} />
                            <ItemForm label="River"
                                name="access.river"
                                id="AccessRiver"
                                htmlFor="AccessRiver"
                                checked={access.river}
                                type="checkbox"
                                onChange={setForm} />
                            <ItemForm label="Beach"
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
                            <ItemForm label="House Size M2" name="house.m2" value={house.m2} onChange={setForm} />
                            <ItemForm label="House Size FT2" name="house.ft2" value={house.ft2} onChange={setForm} />
                            <ItemForm label="Lot Size M2" name="lot.m2" value={lot.m2} onChange={setForm} />
                            <ItemForm label="Lot Size Acres" name="lot.acres" value={lot.acres} onChange={setForm} />
                            <div className="col-md-6 mb-3">
                                <StateDrop label="HOA" name="HOA" options={HOAOptions} value={HOA} onChange={setForm} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Contact