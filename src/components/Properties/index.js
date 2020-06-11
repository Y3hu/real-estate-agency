import React, { useEffect, useState } from 'react'
import DropdownComponent from './dropdown'
import CardsComponent from './cards'
import PropertyComponent from './property'
import { useParams } from 'react-router-dom'

import { withFirebase } from '../Firebase'

import styles from './properties.module.scss'

const quantityOptions = () => {
    var options = []
    for(let i = 0; i<=100; i++){
        options = [...options, i]
    }
    options = [...options, "100+"]
    return options
}

let optArray = [
    {
        name: "Category",
        options: ["buy", "rent", "other"]
    },
    {
        name: "City",
        options: []
    },
    {
        name: "Price",
        options: ["Min. $0 - $50,000 Max", "Min $50,000 - $150,000 Max", "Min $150,000 - $250,000 Max", "Min $250,000 - $ 400,000 Max", "Min $400,000 +"]
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
    const [property, setProperty] = useState({})
    const [loading, setLoading] = useState(false)

    let { filter } = useParams();
    console.log(filter)

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

        firebase.cities().on('value', snapshot => {
            const citiesObject = snapshot.val()

            for (let key in citiesObject) {
                let city = {
                    uid: key,
                    ...citiesObject[key]
                }

                optArray.map(o => {
                    if (o.name === "City") {
                        let cityFound = o.options.find(c => c === city.name)
                        console.log(cityFound)

                        if (!cityFound) o.options = [...o.options, city.name.toUpperCase()]
                    }
                    return 0
                })
            }

        })


        return () => {
            firebase.properties().off()
            firebase.cities().off()
        }
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

export default withFirebase(PropertiesComponent)