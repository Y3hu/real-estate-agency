import React from 'react'

import RioCeleste from '../../assets/carousel/RioCeleste.jpg'
import LakeArenal from '../../assets/carousel/LakeArenal.jpg'
import LakeArenal2 from '../../assets/carousel/LakeArenal2.jpg'

import styles from './landing.module.scss'

const CarouselComponent = () => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className={`carousel-inner ${styles.carousel_slides_container}`}>
                <div className={`carousel-item active ${styles.carousel_slide}`} style={{ backgroundImage: `url(${RioCeleste})` }} data-interval="3000">
                    {/**<img src={RioCeleste} className="d-block" alt="Rio Celeste" />*/}

                    <div className="carousel-caption d-none d-md-block">
                        <h5>$40,000</h5>
                        <p>Boasts 112 feet (34 meters) right on the shore of the famous Rio Celeste!</p>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${LakeArenal})` }} data-interval="3000">
                    {/**<img src={LakeArenal} className="d-block" alt="Lake Arenal" />*/}
                    <div className="carousel-caption d-none d-md-block">
                        <h5>$199,000</h5>
                        <p> Inspired by Huf House in Germany, is constructed of steel, concrete and glass, and sits on a 1200 sq m lot.</p>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${LakeArenal2})` }} data-interval="3000">
                    {/**<img src={LakeArenal2} className="d-block" alt={LakeArenal2} />*/}
                    <div className="carousel-caption d-none d-md-block">
                        <h5>$249,000</h5>
                        <p>The home includes a bright and spacious open floor plan overlooking Lake Arenal.</p>
                    </div>
                </div>
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

export default CarouselComponent