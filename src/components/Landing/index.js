// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import CarouselComponent from './carousel'

import styles from './landing.module.scss'
//import DropdownComponent from './dropdown'

import CategoriesComponent from './categories'

/**const optArray= [
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
]*/

const categories = [
    {name: "RESIDENTIAL", image: "https://www.w3schools.com/w3images/house1.jpg"}, 
    {name: "ACRAGE", image: "https://www.w3schools.com/w3images/house2.jpg"},
    {name: "COMMERCIAL", image: "https://www.w3schools.com/w3images/house3.jpg"},
    {name: "DEVELOPMENTS", image: "https://www.w3schools.com/w3images/house4.jpg"},
    {name: "RENTALS", image: "https://www.w3schools.com/w3images/house5.jpg"},
    {name: "CONSTRUCTION", image: "https://www.w3schools.com/w3images/architect.jpg"},
]

const LandingComponent = props => {
    //const [showList, setShowList] = useState(false)

    return(
        <div className={`${styles.landing_container}`}>
            <div className={styles.carousel_container}>
                <CarouselComponent />
            </div>

            {/**<div className={styles.dropdowns}>
                {
                    optArray.map((e, i) => (
                        <DropdownComponent key={i} name={e.name} options={e.options} />
                    ))
                }
            </div>*/}
            <div className={styles.categories_container}>
                {
                    categories.map( (e, i) => (
                        <CategoriesComponent name={e.name} image={e.image} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default LandingComponent