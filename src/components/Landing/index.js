import React from 'react'
import CarouselComponent from './carousel'

import styles from './landing.module.scss'

const LandingComponent = props => {

    return(
        <div className="container" style={{display: "flex", justifyContent: "center"}}>
            <div className={styles.carousel_container}>
                <CarouselComponent />
            </div>
        </div>
    )
}

export default LandingComponent