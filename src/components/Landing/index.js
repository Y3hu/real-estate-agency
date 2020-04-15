// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import CarouselComponent from './carousel'

import { withFirebase } from '../Firebase'

import styles from './landing.module.scss'

import CategoriesComponent from './categories'

const categoriesArray = [
    { name: "RESIDENTIAL", image: "https://www.w3schools.com/w3images/house1.jpg" },
    { name: "ACRAGE", image: "https://www.w3schools.com/w3images/house2.jpg" },
    { name: "COMMERCIAL", image: "https://www.w3schools.com/w3images/house3.jpg" },
    { name: "DEVELOPMENTS", image: "https://www.w3schools.com/w3images/house4.jpg" },
    { name: "RENTALS", image: "https://www.w3schools.com/w3images/house5.jpg" },
    { name: "CONSTRUCTION", image: "https://www.w3schools.com/w3images/architect.jpg" },
]

const LandingComponent = props => {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        props.firebase.categories().on('value', snapshot => {
            const categoriesObject = snapshot.val()

            for (let key in categoriesObject) {
                let categorie = { ...categoriesObject[key] }
                setCategories(c => [...c, categorie])
            }
        })

        return () => props.firebase.categories().off()

    }, [props.firebase])

    return (
        <div className={`${styles.landing_container}`}>
            <div className={styles.carousel_container}>
                <CarouselComponent />
            </div>
            <div className={styles.categories_container}>
                {
                    (categories.length > 0) ?
                        categories.map((e, i) => (
                            <CategoriesComponent name={e.name} image={e.url} key={i} />
                        ))
                        : categoriesArray.map((e, i) => (
                            <CategoriesComponent name={e.name} image={e.image} key={i} />
                        ))
                }
            </div>
        </div>
    )
}

export default withFirebase(LandingComponent)