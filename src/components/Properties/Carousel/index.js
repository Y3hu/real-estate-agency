import React from 'react'

import CarouselItem from './carousel-item'

import styles from './carousel.module.scss'

const CarouselComponent = ({ images = [] }) => {

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className={`carousel-inner ${styles.carousel_slides_container}`}>
                {
                    images.map((image, i) => (
                        <CarouselItem image={image} key={`carousel-item ${i}`} active={(i === 0) ? true : false} />
                    ))
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default CarouselComponent