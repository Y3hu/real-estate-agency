import React from 'react'

import styles from './carousel.module.scss'

const CarouselItemComponent = ({ image, active }) => {
    
    return (
        <div className={(active) ? `carousel-item active ${styles.carousel_slide}` : `carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${image})` }}>

        </div>
    )
}

export default CarouselItemComponent

/**
<div className="carousel-caption d-none d-md-block">
                <h5>$249,000</h5>
                <p>The home includes a bright and spacious open floor plan overlooking Lake Arenal.</p>
            </div>
 */