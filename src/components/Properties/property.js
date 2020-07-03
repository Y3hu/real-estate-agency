import React, { useState, useEffect } from 'react'
import AlertHook from '../../hooks/alertHook'
import styles from './properties.module.scss'
import CarouselComponent from './Carousel'
import FormComponent from '../Contact/form'
import AlertComponent from '../Shared/Alert'

const PropertyComponent = ({ property, setProperty }) => {
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
                Back
            </button>
            <div className={styles.property_top}>
                <div className={styles.property_top_left}>
                    <CarouselComponent images={property.images} />
                </div>
                <div className={styles.property_top_right}>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Country:</strong> {property.country}</li>
                        <li className="list-group-item"><strong>Province:</strong> {property.province}</li>
                        <li className="list-group-item"><strong>City:</strong> {property.city}</li>
                        <li className="list-group-item"><strong>Region:</strong> {property.region}</li>
                        <li className="list-group-item"><strong>House Size (ft²):</strong> {property.house.ft2} ft²</li>
                        <li className="list-group-item"><strong>House Size (m²):</strong> {property.house.m2} m²</li>
                        <li className="list-group-item"><strong>Lot Size (acres):</strong> {property.lot.acres} acres</li>
                        <li className="list-group-item"><strong>Lot Size (m²):</strong> {property.lot.m2} m²</li>
                        <li className="list-group-item"><strong>Beds:</strong> {property.beds}</li>
                        <li className="list-group-item"><strong>Baths:</strong> {property.baths}</li>
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
                                    Before: <strike>${transformPrice(property.originalPrice)}</strike>
                                </span>
                                <span className={`alert alert-primary ${styles.property_medium_alert}`} role="alert" style={{ fontWeight: "bold", fontSize: "2.2rem" }}>
                                    Now: ${transformPrice(property.price)}
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
                            <h1 className="display-4">Description</h1>
                            <hr className="my-4" />
                            <br />
                            <p className="lead">{property.description}</p>
                        </div>
                    </div>

                    <div className="jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Amenities</h1>
                            <br />
                            <br />
                            <h2 className="display-6">General</h2>
                            <hr className="my-4" />
                            <ul>
                                {
                                    general.map((e, i) => <li key={i}>{e.replace(/_/g, " ").toLowerCase()}</li>)
                                }
                            </ul>
                            <br />
                            <h2 className="display-6">Features</h2>
                            <hr className="my-4" />
                            <ul>
                                {
                                    features.map((e, i) => <li key={i}>{e.replace(/_/g, " ").toLowerCase()}</li>)
                                }
                            </ul>
                            <br />
                            <h2 className="display-6">Community</h2>
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
                            <FormComponent message={`(${property.listingCode}) (${property.propertyTitle})`} showAlertMessage={showAlertMessage} />
                        </div>
                    </div>
                    {
                        (added) ? <AlertComponent message="Message sent successfully!" /> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertyComponent