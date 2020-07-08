import React, { useState, useEffect } from 'react'
import AlertHook from '../../hooks/alertHook'
import styles from './properties.module.scss'
import CarouselComponent from './Carousel'
import { Alert, Form } from '../Shared'
import * as STRINGS from '../../constants/strings'

const PropertyComponent = ({ property, setProperty, language }) => {
    const [general, setGeneral] = useState([])
    const [features, setFeatures] = useState([])
    const [community, setCommunity] = useState([])
    const { added, showAlertMessage } = AlertHook()

    useEffect(() => {
        filterAmenities(property.general, 1)
        filterAmenities(property.features, 2)
        filterAmenities(property.community, 3)

    }, [property.general, property.features, property.community])

    const filterAmenities = (options, amenitieNumber) => {

        for (let key in options) {
            if (options[key]) {
                switch (amenitieNumber) {
                    case 1:
                        setGeneral(general => [...general, key])
                        break
                    case 2:
                        setFeatures(features => [...features, key])
                        break
                    case 3:
                        setCommunity(community => [...community, key])
                        break

                    default:
                        break
                }
            }

        }

    }

    const transformPrice = price => new Intl.NumberFormat().format(price)

    return (
        <div className={styles.property_container}>
            <button
                className={`fas fa-arrow-alt-circle-left ${styles.backButton}`}
                onClick={() => setProperty({})}
            >
                {!language ? 'Back' : STRINGS.BACK}
            </button>
            <div className={styles.property_top}>
                <div className={styles.property_top_left}>
                    <CarouselComponent images={property.images} />
                </div>
                <div className={styles.property_top_right}>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>{!language ? 'Country' : STRINGS.COUNTRY}:</strong> {property.country}</li>
                        <li className="list-group-item"><strong>{!language ? 'Province' : STRINGS.PROVINCE}:</strong> {property.province}</li>
                        <li className="list-group-item"><strong>{!language ? 'City' : STRINGS.CITY}:</strong> {property.city}</li>
                        <li className="list-group-item"><strong>{!language ? 'Region' : STRINGS.REGION}:</strong> {property.region}</li>
                        <li className="list-group-item"><strong>{!language ? 'House Size (ft²)' : STRINGS.HOUSESIZEFT2}:</strong> {property.house.ft2} ft²</li>
                        <li className="list-group-item"><strong>{!language ? 'House Size (m²)' : STRINGS.HOUSESIZEM2}:</strong> {property.house.m2} m²</li>
                        <li className="list-group-item"><strong>{!language ? 'Lot Size (acres)' : STRINGS.LOTSIZEACRES}:</strong> {property.lot.acres} acres</li>
                        <li className="list-group-item"><strong>{!language ? 'Lot Size (m²)' : STRINGS.LOTSIZEM2}:</strong> {property.lot.m2} m²</li>
                        <li className="list-group-item"><strong>{!language ? 'Beds' : STRINGS.BEDS}:</strong> {property.beds}</li>
                        <li className="list-group-item"><strong>{!language ? 'Baths' : STRINGS.BATHS}:</strong> {property.baths}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.property_medium}>

                <div className={styles.property_medium_left}>
                    <span className={`alert alert-primary ${styles.property_medium_alert}`} role="alert">
                        {property.propertyTitle}
                    </span>
                </div>

                <div className={styles.property_medium_right}>
                    {
                        (property.originalPrice) ?
                            <>
                                <span className="alert alert-danger" role="alert" style={{ fontSize: "1.2rem" }}>
                                    {!language ? 'Before' : STRINGS.BEFORE}: <strike>${transformPrice(property.originalPrice)}</strike>
                                </span>
                                <span className={`alert alert-primary ${styles.property_medium_alert}`} role="alert" style={{ fontWeight: "bold", fontSize: "2.2rem" }}>
                                    {!language ? 'Now' : STRINGS.NOW}: ${transformPrice(property.price)}
                                </span>
                            </> :
                            <span className={`alert alert-primary ${styles.property_medium_alert}`} role="alert">
                                ${transformPrice(property.price)}
                            </span>
                    }
                </div>

            </div>
            <div className={styles.property_bottom}>
                <div className={styles.property_bottom_left}>

                    <div className="jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{!language ? 'Description' : STRINGS.DESCRIPTION}</h1>
                            <hr className="my-4" />
                            <br />
                            <p className="lead">{property.description}</p>
                        </div>
                    </div>

                    <div className="jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{!language ? 'Amenities' : STRINGS.AMENITIES}</h1>
                            <br />
                            <br />
                            <h3 className="display-6">{!language ? 'General' : STRINGS.GENERAL}</h3>
                            <hr className="my-4" />
                            <ul>
                                {
                                    general.map((e, i) => <li key={i}>{e.replace(/_/g, " ").toLowerCase()}</li>)
                                }
                            </ul>
                            <br />
                            <h3 className="display-6">{!language ? 'Features' : STRINGS.FEATURES}</h3>
                            <hr className="my-4" />
                            <ul>
                                {
                                    features.map((e, i) => <li key={i}>{e.replace(/_/g, " ").toLowerCase()}</li>)
                                }
                            </ul>
                            <br />
                            <h3 className="display-6">{!language ? 'Community' : STRINGS.COMMUNITY}</h3>
                            <hr className="my-4" />
                            <ul>
                                {
                                    community.map((e, i) => <li key={i}>{e.replace(/_/g, " ").toLowerCase()}</li>)
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={styles.property_bottom_right}>
                    <div className="jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-5">Contact the agent</h1>
                            <hr className="my-4" />
                            <Form message={`(${property.listingCode}) (${property.propertyTitle})`} showAlertMessage={showAlertMessage} language={language} />
                        </div>
                    </div>
                    {
                        (added) ? <Alert message="Message sent successfully!" /> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertyComponent