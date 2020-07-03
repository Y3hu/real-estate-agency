import React from 'react'

import styles from './carousel.module.scss'

const Carousel = ({ dbImages }) => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                {dbImages.map((image, i) => (<li data-target="#carouselExampleCaptions" data-slide-to={i} key={image.name} className={image.cover ? "active" : ''}></li>))}
            </ol>
            <div className={`carousel-inner ${styles.carousel_slides_container}`}>
                {
                    dbImages.map((image, i) => (
                        <CarouselItem image={image} key={`carousel-item ${i}`} />
                    ))
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

const CarouselItem = ({ image }) => {

    let { url, caption, cover } = image

    return (
        <div className={(cover) ? `carousel-item active ${styles.carousel_slide}` : `carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${url})` }}>
            <div className="carousel-caption d-none d-md-block">
                <p>{caption ? caption : ''}</p>
            </div>
        </div>
    )
}

export default Carousel