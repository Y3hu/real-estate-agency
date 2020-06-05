import React from 'react'
import { useForm } from "react-hooks-helper"

import General from './GeneralInfoComponent'
import Location from './LocationInfoComponent'
import Details from './DetailsComponent'
import Amenities from './AmenitiesComponent'
import Assets from './AssetsComponent'

import styles from '../manager-properties.module.scss'

const defaultData = {
    //GENERAL Info
    listingCode: '',
    listingDate: '',
    propertyType: '',
    category: '',
    propertyTitle: '',
    price: 0,
    originalPrice: 0,
    description: '',

    //Location Info
    locationInfo: '',
    street: '',
    suit: '',
    city: '',
    province: '',
    region: '',
    country: '',

    //Details
    beds: 0,
    baths: 0,
    units: 0,
    year: 0,
    view: {
        lake: false,
        mountain: false,
        volcano: false,
        ocean: false,
        river: false,
        jungle: false,
        beach: false
    },
    access: {
        lake: false,
        river: false,
        beach: false
    },
    house: {
        m2: 0,
        ft2: 0,
    },
    lot: {
        m2: 0,
        acres: 0,
    },
    HOA: true,

    //Amenities
    general: {
        electricity: false,
        water: false,
        internet: false,
        hot_water: {
            gas: false,
            electric: false
        },
        cable: false,
        satellite: false,
        central_air: false,
        central_vac: false,
        air_wall_unit: false,
        heating: false,
        celling_fans: false,
        other: '',
    },
    features: {
        alarm: false,
        cameras: false,
        gas_fireplace: false,
        wood_fireplace: false,
        skylights: false,
        water_softener: false,
        sprinkler_system: false,
        open_deck: false,
        balcony: false,
        covered_terrace: false,
        gazebo_rancho: false,
        garage: false,
        carport: false,
        storage_shed: false,
        furnished: false,
        washing_machine: false,
        dryer: {
            gas: false,
            electric: false,
        },
        oven: {
            gas: false,
            electric: false
        },
        refrigerator: false,
        freezer: false,
        dishwasher: false,
        microwave: false,
        trash_compactor: false,
        landscaping: false,
        lawn: false,
        pasture: false,
        fence: false,
        fruit_trees: false,
        pool: false,
        jacuzzi: false,
        bathhub: false,
        granite_counter_top: false,
        tile_floors: false,
        hardwood_floors: false,
        carpeting: false,
        handicap_facilities: false,
        wheelchair_ramp: false,
        wood_stove: false,
        pizza_oven: false,
        other: '',
    },
    community: {
        marina: false,
        boat_slip: false,
        tennis_courts: false,
        community_pool: false,
        club_house: false,
        security_guard: false,
        security_gate: false,
        other: '',
    },

    //Assets
    images: [],
    video: ''
}

const TabsComponent = ({ showAlertMessage }) => {

    const [formData, setForm] = useForm(defaultData)

    const props = { formData, setForm }

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
                    <Assets {...props} showAlertMessage={showAlertMessage} />
                </div>
            </div>

        </div>
    )
}

export default TabsComponent