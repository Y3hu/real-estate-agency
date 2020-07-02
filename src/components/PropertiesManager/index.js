import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import * as ROUTES from '../../constants/routes'

import CardsComponent from './cards'
import TabsComponent from './Tabs'
import { Alert, Spinner } from '../Shared'

import AlertHook from '../../hooks/alertHook'

import { withFirebase } from '../Firebase'

import styles from './properties.module.scss'

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
        hot_water_gas: false,
        hot_water_electric: false,
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
        dryer_gas: false,
        dryer_electric: false,
        oven_gas: false,
        oven_electric: false,
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

const PropertiesComponent = ({ firebase, history }) => {
    const [dbProperties, setDbProperties] = useState([])
    const [property, setProperty] = useState({})
    const [loading, setLoading] = useState(false)

    const { added, showAlertMessage } = AlertHook()

    useEffect(() => {
        setLoading(true)
        firebase.properties().on('value', snapshot => {
            const propertiesObject = snapshot.val()

            for (let key in propertiesObject) {
                let property = {
                    uid: key,
                    ...propertiesObject[key]
                }

                let found = dbProperties.find(p => p.uid === property.uid)

                if (!found) setDbProperties(p => [...p, property])
            }
            setLoading(false)
        })


        return () => {
            firebase.properties().off()
        }
    }, [firebase, dbProperties])

    const addOrEditProperty = state => state ? setProperty({ ...state }) : setProperty({ ...defaultData })

    const onDelete = property => {
        let { uid, images, video } = property

        if (images.length > 0) {
            images.forEach(image => {
                firebase.storage.ref(`/images/${image.name}`).delete()
                    .then(() => {
                        console.log('file deleted')
                    }).catch(error => {
                        // Uh-oh, an error occurred!
                        console.log(error)
                    })
            })
        }

        if (video) {
            firebase.storage.ref(`/videos/${video.name}`).delete()
                .then(() => {
                    console.log('file deleted')
                }).catch(error => {
                    // Uh-oh, an error occurred!
                    console.log(error)
                })
        }

        // Delete property from the database
        firebase.propertie(uid)
            .remove()
            .then(() => setDbProperties([]))

    }

    const redirect = _ => history.push(ROUTES.MANAGEPROPERTIES)

    return (
        <div className={styles.properties_container}>
            <div className={styles.manager_top}>
                <h1>Properties Manager</h1>
            </div>
            {
                (Object.keys(property).length) ?
                    <>
                        <TabsComponent showAlertMessage={showAlertMessage} property={property} addOrEditProperty={addOrEditProperty} redirect={redirect} />
                        {
                            (added) ? <Alert message="Property added successfully!" /> : ''
                        }
                    </>

                    :
                    <div className={styles.properties_bottom}>
                        {
                            (dbProperties.length > 0 && !loading) ?
                                dbProperties.map((p, i) => (
                                    <CardsComponent key={i} info={p} onSelect={addOrEditProperty} onDelete={onDelete} />
                                )) : <Spinner />
                        }

                        <button
                            className={`fas fa-plus ${styles.floatButton}`}
                            onClick={() => addOrEditProperty({ ...defaultData })}
                        >
                        </button>
                    </div>
            }
        </div >
    )
}

const Manager = compose(
    withFirebase,
    withRouter
)(PropertiesComponent)

export default Manager