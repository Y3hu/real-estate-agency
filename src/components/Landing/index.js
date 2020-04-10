// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import CarouselComponent from './carousel'

import styles from './landing.module.scss'
//import DropdownComponent from './dropdown'

import FB_LOGO from '../../assets/fb_logo.jpg'
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

const LandingComponent = props => {
    //const [showList, setShowList] = useState(false)

    return(
        <div className={`${styles.landing_container}`}>
            <div className={styles.carousel_container}>
                <CarouselComponent />
                <div className="card" style={{width: "18rem", marginTop: "1vh"}}>
                    <img src={FB_LOGO} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Lake Arenal's premiere full service real estate & construction company.</p>
                    </div>
                </div>
            </div>

            {/**<div className={styles.dropdowns}>
                {
                    optArray.map((e, i) => (
                        <DropdownComponent key={i} name={e.name} options={e.options} />
                    ))
                }
            </div>*/}
            <div>
                <CategoriesComponent />
            </div>
        </div>
    )
}

export default LandingComponent