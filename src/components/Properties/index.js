import React, { useEffect, useState } from 'react'
import DropdownComponent from './dropdown'
import CardsComponent from './cards'
import PropertyComponent from './property'
import SpinnerComponent from '../Shared/Spinner'
import { useParams } from 'react-router-dom'

import { withFirebase } from '../Firebase'

import styles from './properties.module.scss'

const quantityOptions = () => {
    var options = []
    for (let i = 0; i <= 100; i++) {
        options = [...options, i]
    }
    options = [...options, "100+"]
    return options
}

let optArray = [
    {
        name: "Category",
        options: ["commercial", "residential", "developments", "rentals", "land/lots"]
    },
    {
        name: "Price",
        options: ["Min $0 - $50,000 Max", "Min $50,000 - $150,000 Max", "Min $150,000 - $250,000 Max", "Min $250,000 - $ 400,000 Max", "Min $400,000 +"]
    },
    {
        name: "Bedrooms",
        options: quantityOptions()
    },
    {
        name: "Bathrooms",
        options: quantityOptions()
    }
]

const PropertiesComponent = ({ firebase }) => {
    const [dbProperties, setDbProperties] = useState([])
    const [dbCities, setDbCities] = useState([])
    const [property, setProperty] = useState({})
    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState(null)
    const [category, setCategory] = useState(null)
    const [price, setPrice] = useState(null)
    const [bedrooms, setBedrooms] = useState(null)
    const [bathrooms, setBathrooms] = useState(null)

    let { filter } = useParams()

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
        })

        firebase.cities().on('value', snapshot => {
            const citiesObject = snapshot.val()

            for (let key in citiesObject) {
                let city = citiesObject[key].name.toUpperCase()

                setDbCities(cities => [...cities, city])
            }
        })

        setLoading(false)
        if (filter !== "all") setCategory(filter === "land_lots" ? "land/lots" : filter.toString())

        return () => {
            firebase.properties().off()
            firebase.cities().off()
        }
    }, [firebase, filter])

    const setPriceRange = price => {

        let key = price.toString().toLowerCase()
        switch (key) {
            case "min $0 - $50,000 max": setPrice(1)
                break;
            case "min $50,000 - $150,000 max": setPrice(2)
                break;
            case "min $150,000 - $250,000 max": setPrice(3)
                break;
            case "min $250,000 - $400,000 max": setPrice(4)
                break;
            default: setPrice(5)
                break;
        }
    }

    const filterProperties = () => {
        let filteredProperties = [...dbProperties]

        if (city) filteredProperties = filteredProperties.filter(p => p.city.toLowerCase() === city.toString().toLowerCase())
        if (category) filteredProperties = filteredProperties.filter(p => p.category.toLowerCase() === category.toString().toLowerCase())
        if (bedrooms) filteredProperties = filteredProperties.filter(p => p.beds.toString().toLowerCase() === bedrooms.toString().toLowerCase())
        if (bathrooms) filteredProperties = filteredProperties.filter(p => p.baths.toString().toLowerCase() === bathrooms.toString().toLowerCase())

        if (price) {

            let key = price
            switch (key) {
                case 1: filteredProperties = filteredProperties.filter(p => p.price.toLowerCase() >= 0 && p.price.toLowerCase() < 50000)
                    break;
                case 2: filteredProperties = filteredProperties.filter(p => p.price.toLowerCase() >= 50000 && p.price.toLowerCase() < 150000)
                    break;
                case 3: filteredProperties = filteredProperties.filter(p => p.price.toLowerCase() >= 150000 && p.price.toLowerCase() < 250000)
                    break;
                case 4: filteredProperties = filteredProperties.filter(p => p.price.toLowerCase() >= 250000 && p.price.toLowerCase() < 400000)
                    break;
                default: filteredProperties = filteredProperties.filter(p => p.price.toLowerCase() > 400000)
                    break;
            }
        }

        return [...filteredProperties]
    }

    const resetFilter = () => {
        setCity(null)
        setCategory(null)
        setBedrooms(null)
        setBathrooms(null)
        setPrice(null)
    }

    return (
        <div className={styles.properties_container}>
            {
                (Object.keys(property).length) ?
                    <>

                        <PropertyComponent property={property} setProperty={setProperty} />
                    </> :
                    <>
                        <div className={styles.properties_top}>

                            <DropdownComponent key="cities_dropdown" name="City" options={dbCities} func={setCity} />
                            {
                                optArray.map((e, i) => (
                                    <DropdownComponent
                                        key={i}
                                        name={e.name}
                                        options={e.options}
                                        func={(e.name === "Category") ? setCategory : (e.name === "Price") ? setPriceRange : (e.name === "Bedrooms") ? setBedrooms : setBathrooms}
                                    />
                                ))
                            }

                        </div>
                        <div className={styles.properties_bottom}>
                            {


                                (filterProperties().length > 0 && !loading) ?
                                    filterProperties().map((p, i) => (
                                        <CardsComponent key={i} info={p} onSelect={setProperty} />
                                    ))
                                    // eslint-disable-next-line
                                    : (city || category || bedrooms || bathrooms || price && filterProperties().length <= 0) ? <h3 style={{ marginTop: "10vh" }}>No matches, try changing the filters or click the reset filters button below...</h3>
                                        : <SpinnerComponent />
                            }
                            <button
                                className={`fas fa-sync-alt ${styles.floatButton}`}
                                onClick={() => resetFilter()}
                            >
                            </button>
                        </div>
                    </>
            }
        </div >
    )
}

export default withFirebase(PropertiesComponent)