import React from 'react'
import DropdownComponent from './dropdown'
import CardsComponent from './cards'

import styles from './properties.module.scss'

const optArray = [
    {
        name: "category",
        options: ["buy", "rent", "other"]
    },
    {
        name: "price",
        options: ["+$10K-$20K", "+$20K-$30K", "$35K-more"]
    },
    {
        name: "bedrooms",
        options: ["2", "3", "4", "+4"]
    },
    {
        name: "bathrooms",
        options: ["2", "3", "4", "+4"]
    }
]

const properties = [
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

]

const PropertiesComponent = props => {

    return (
        <div className={styles.properties_container}>
            <div className={styles.properties_top}>

                {
                    optArray.map((e, i) => (
                        <DropdownComponent key={i} name={e.name} options={e.options} />
                    ))
                }

            </div>
            <div className={styles.properties_bottom}>
                {
                    properties.map((e, i) => (
                        <CardsComponent image={e.image} />
                    ))
                }
            </div>
        </div >
    )
}

export default PropertiesComponent