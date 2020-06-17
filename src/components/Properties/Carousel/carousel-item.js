import React from 'react'

import styles from './carousel.module.scss'

const CarouselItemComponent = ({ image, active }) => {
    
    return (
        <div className={(active) ? `carousel-item active ${styles.carousel_slide}` : `carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${image})` }}>

        </div>
    )
}

export default CarouselItemComponent