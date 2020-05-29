import React, { useEffect, useState } from 'react'
import DropdownComponent from './dropdown'
import CardsComponent from './cards'

import { withFirebase } from '../Firebase'

import styles from './properties.module.scss'
import CarouselComponent from './Carousel'
import FormComponent from '../Contact/form'

const optArray = [
    {
        name: "Category",
        options: ["buy", "rent", "other"]
    },
    {
        name: "City",
        options: ["Nuevo Arenal", "Fortuna", "Tronadora", "Tilarán", "Bagaces"]
    },
    {
        name: "Price",
        options: ["Min. $0 - $50,000 Max", "Min $50,000 - $150,000 Max", "Min $150,000 - $250,000 Max", "Min $250,000 - $ 400,000 Max", "Min $400,000 +"]
    },
    {
        name: "Bedrooms",
        options: ["1", "2", "3", "4+"]
    },
    {
        name: "Bathrooms",
        options: ["1", "2", "3", "4+"]
    }
]

/**const properties = [
    { name: "RESIDENTIAL", image: "https://www.w3schools.com/w3images/house1.jpg" },
    { name: "ACRAGE", image: "https://www.w3schools.com/w3images/house2.jpg" },
    { name: "COMMERCIAL", image: "https://www.w3schools.com/w3images/house3.jpg" },
    { name: "DEVELOPMENTS", image: "https://www.w3schools.com/w3images/house4.jpg" },
    { name: "RENTALS", image: "https://www.w3schools.com/w3images/house5.jpg" },
    { name: "CONSTRUCTION", image: "https://www.w3schools.com/w3images/architect.jpg" },
    { name: "RESIDENTIAL", image: "https://www.w3schools.com/w3images/house1.jpg" },
    { name: "ACRAGE", image: "https://www.w3schools.com/w3images/house2.jpg" },
    { name: "COMMERCIAL", image: "https://www.w3schools.com/w3images/house3.jpg" },
    { name: "DEVELOPMENTS", image: "https://www.w3schools.com/w3images/house4.jpg" },
    { name: "RENTALS", image: "https://www.w3schools.com/w3images/house5.jpg" },
    { name: "CONSTRUCTION", image: "https://www.w3schools.com/w3images/architect.jpg" },
    { name: "COMMERCIAL", image: "https://www.w3schools.com/w3images/house3.jpg" },
    { name: "DEVELOPMENTS", image: "https://www.w3schools.com/w3images/house4.jpg" },
    { name: "RENTALS", image: "https://www.w3schools.com/w3images/house5.jpg" },
]*/

const PropertiesComponent = ({ firebase }) => {
    const [dbProperties, setDbProperties] = useState([])
    const [property, setProperty] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        firebase.properties().on('value', snapshot => {
            const propertiesObject = snapshot.val()

            for (let key in propertiesObject) {
                let propertie = {
                    uid: key,
                    ...propertiesObject[key]
                }

                setDbProperties(p => [...p, propertie])
            }

            setLoading(false)
        })

        return () => firebase.properties().off()
    }, [firebase])

    return (
        <div className={styles.properties_container}>
            {
                (Object.keys(property).length) ?
                    <>

                        <PropertyComponent property={property} setProperty={setProperty} />
                    </> :
                    <>
                        <div className={styles.properties_top}>

                            {
                                optArray.map((e, i) => (
                                    <DropdownComponent key={i} name={e.name} options={e.options} />
                                ))
                            }

                        </div>
                        <div className={styles.properties_bottom}>
                            {
                                (dbProperties.length > 0 && !loading) ?
                                    dbProperties.map((p, i) => (
                                        <CardsComponent key={i} info={p} onSelect={setProperty} />
                                    )) :
                                    ''
                            }
                        </div>
                    </>
            }
        </div >
    )
}

const PropertyComponent = ({ property, setProperty }) => {
    const [general, setGeneral] = useState([])
    const [features, setFeatures] = useState([])
    const [community, setCommunity] = useState([])

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
                    <div className={styles.property_top_left_info}>
                        <p className="btn-primary">{property.propertyTitle}</p>
                        <p className="btn-primary">${property.price}</p>
                    </div>
                </div>
                <div className={styles.property_top_right}>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Country:</strong> {property.country}</li>
                        <li className="list-group-item"><strong>Province:</strong> {property.province}</li>
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

                    <div className="jumbotron-fluid amenities">
                        <div className="container">
                            <h1 className="display-4">Amenities</h1>
                            <br />
                            <br />
                            <h2 className="display-6">General</h2>
                            <hr className="my-4" />
                            <ul>
                                {
                                    general.map((e, i) => <li key={i}>{e}</li>)
                                }
                            </ul>
                            <br />
                            <h2 className="display-6">Features</h2>
                            <hr className="my-4" />
                            <ul>
                                {
                                    features.map((e, i) => <li key={i}>{e}</li>)
                                }
                            </ul>
                            <br />
                            <h2 className="display-6">Community</h2>
                            <hr className="my-4" />
                            <ul>
                                {
                                    community.map((e, i) => <li key={i}>{e}</li>)
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={styles.property_bottom_right}>
                    <FormComponent message={`(${property.listingCode}) (${property.propertyTitle})`}/>
                </div>
            </div>
        </div>
    )
}

export default withFirebase(PropertiesComponent)