import React, { useEffect, useState } from 'react'
import DropdownComponent from './dropdown'
import CardsComponent from './cards'
import PropertyComponent from './property'
import { useParams } from 'react-router-dom'

import { withFirebase } from '../Firebase'

import styles from './properties.module.scss'

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

export default withFirebase(PropertiesComponent)