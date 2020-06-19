import React, { useState, useEffect } from 'react'
import { withFirebase } from '../Firebase'

import CategoriesComponent from './categories'
import { Spinner, Carousel } from '../Shared'

import styles from './landing.module.scss'

const categoriesArray = [
    { name: "RESIDENTIAL", image: "https://www.w3schools.com/w3images/house1.jpg", filter: "residential" },
    { name: "LAND / LOTS", image: "https://www.w3schools.com/w3images/house2.jpg", filter: "land_lots" },
    { name: "COMMERCIAL", image: "https://www.w3schools.com/w3images/house3.jpg", filter: "commercial" },
    { name: "DEVELOPMENTS", image: "https://www.w3schools.com/w3images/house4.jpg", filter: "developments" },
    { name: "RENTALS", image: "https://www.w3schools.com/w3images/house5.jpg", filter: "rentals" }
]

const HomeComponent = ({ firebase }) => {
    const [loading, setLoading] = useState(false)
    const [dbImages, setDbImages] = useState([])

    useEffect(() => {
        setLoading(true)

        firebase.images().on('value', snapshot => {
            // eslint-disable-next-line
            const carouselObject = snapshot.val()

            for (let key in carouselObject) {
                let image = { uid: key, ...carouselObject[key] }

                let found = dbImages.find(i => i.uid === image.uid)
                if (!found) setDbImages(images => [...images, image])
            }
            setLoading(false)
        })

        return () => firebase.images().off()

    }, [firebase, dbImages])

    return (
        <div className={`${styles.landing_container}`}>
            {
                (loading) ? <Spinner /> :
                    <React.Fragment>
                        <div className={styles.carousel_container}>
                            <Carousel dbImages={dbImages} />
                        </div>
                        <div className={styles.categories_container}>
                            {
                                categoriesArray.map((e, i) => (
                                    <CategoriesComponent category={e} key={i} />
                                ))
                            }
                        </div>
                    </React.Fragment>
            }

        </div>
    )
}

export default withFirebase(HomeComponent)