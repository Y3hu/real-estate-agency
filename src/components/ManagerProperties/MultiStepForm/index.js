import React from "react"
import { useForm, useStep } from "react-hooks-helper"

import General from "./GeneralInfoComponent"
import Location from "./LocationInfoComponent"
import Details from "./DetailsComponent"
import Amenities from './AmenitiesComponent'
import Assets from './AssetsComponent'
import Review from "./Review"
import Submit from "./Submit"

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
        mountains: false,
        volcano: false,
        ocean: false,
        river: false,
        jungle: false
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
        celling_fans: false
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
    },
    community: {
        marina: false,
        boat_slip: false,
        tennis_courts: false,
        community_pool: false,
        club_house: false
    },
    other: '',

    //Assets
    images: [],
    video: ''
}

const steps = [
    { id: "general" },
    { id: "location" },
    { id: "details" },
    { id: "amenities" },
    { id: "assets" },
    { id: "review" },
    { id: "submit" }
]

const MultiStepForm = ({ images }) => {
    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({ initialStep: 0, steps })
    const { id } = step

    const props = { formData, setForm, navigation }

    switch (id) {
        case "general":
            return <General {...props} />
        case "location":
            return <Location {...props} />
        case "details":
            return <Details {...props} />
        case "amenities":
            return <Amenities {...props} />
        case "assets":
            return <Assets {...props} />
        case "review":
            return <Review {...props} />
        case "submit":
            return <Submit {...props} />
        default:
            return null
    }
}

export default MultiStepForm