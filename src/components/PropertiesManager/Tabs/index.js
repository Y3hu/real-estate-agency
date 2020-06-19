import React from 'react'
import { useForm } from "react-hooks-helper"

import General from './GeneralInfoComponent'
import Location from './LocationInfoComponent'
import Details from './DetailsComponent'
import Amenities from './AmenitiesComponent'
import Assets from './AssetsComponent'

import styles from './tabs.module.scss'

const TabsComponent = ({ showAlertMessage, property, addOrEditProperty, redirect }) => {

    const [formData, setForm] = useForm(property)

    const props = { formData, setForm }

    return (
        <div className={`row ${styles.tab_container}`}>
            <button
                className={`fas fa-arrow-alt-circle-left ${styles.backButton}`}
                onClick={() => addOrEditProperty({})}
            >
                Back
            </button>

            <div className={`list-group ${styles.list_group}`} id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">General Info</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Location Info</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Details</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Amenities</a>
                <a className="list-group-item list-group-item-action" id="list-other-list" data-toggle="list" href="#list-other" role="tab" aria-controls="other">Assets</a>
            </div>

            <div className={`tab-content ${styles.tab_content}`} id="nav-tabContent">
                <div className={`tab-pane fade show active ${styles.tab_pane}`} id="list-home" role="tabpanel" aria-labelledby="list-home-list">

                    <General {...props} />

                </div>
                <div className={`tab-pane fade ${styles.tab_pane}`} id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <Location  {...props} />
                </div>
                <div className={`tab-pane fade ${styles.tab_pane}`} id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                    <Details {...props} />
                </div>
                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    <Amenities {...props} />
                </div>
                <div className="tab-pane fade" id="list-other" role="tabpanel" aria-labelledby="list-other-list">
                    <Assets {...props} showAlertMessage={showAlertMessage} redirect={redirect} />
                </div>
            </div>

        </div>
    )
}

export default TabsComponent