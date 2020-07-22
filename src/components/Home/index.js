import React, { useState, useEffect } from 'react'
import { withFirebase } from '../Firebase'

import CategoriesComponent from './categories'
import { Spinner, Carousel } from '../Shared'

import styles from './landing.module.scss'

import RESIDENTIALIMG from '../../assets/RESIDENTIAL.png'
import LANDLOTSIMG from '../../assets/LANDLOTS.jpeg'
import COMMERCIALIMG from '../../assets/COMMERCIAL.jpg'
import DEVELOPMENTSIMG from '../../assets/DEVELOPMENTS.png'
import RENTALSIMG from '../../assets/RENTALS.JPG'

const categoriesArray = [
    { name: "RESIDENTIAL", image: RESIDENTIALIMG, filter: "residential" },
    { name: "LAND / LOTS", image: LANDLOTSIMG, filter: "land_lots" },
    { name: "COMMERCIAL", image: COMMERCIALIMG, filter: "commercial" },
    { name: "DEVELOPMENTS", image: DEVELOPMENTSIMG, filter: "developments" },
    { name: "RENTALS", image: RENTALSIMG, filter: "rentals" }
]

const categoriasArray = [
    { name: "RESIDENCIAL", image: RESIDENTIALIMG, filter: "residential" },
    { name: "TERRENOS / LOTES", image: LANDLOTSIMG, filter: "land_lots" },
    { name: "COMERCIAL", image: COMMERCIALIMG, filter: "commercial" },
    { name: "DESARROLLOS", image: DEVELOPMENTSIMG, filter: "developments" },
    { name: "ALQUILERES", image: RENTALSIMG, filter: "rentals" }
]

const HomeComponent = ({ firebase, language }) => {
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
                (loading) ? <Spinner language={language} /> :
                    <React.Fragment>
                        <div className={styles.carousel_container}>
                            <Carousel dbImages={dbImages} />
                        </div>
                        <div className={styles.categories_container}>
                            {!language ?
                                categoriesArray.map((e, i) => (
                                    <CategoriesComponent category={e} key={i} />
                                )) :
                                categoriasArray.map((e, i) => (
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