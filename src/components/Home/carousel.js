import React from 'react'

import Carousel1 from '../../assets/carousel/carousel1.png'
import Carousel2 from '../../assets/carousel/carousel2.jpeg'
import Carousel3 from '../../assets/carousel/carousel3.jpeg'
import Carousel4 from '../../assets/carousel/carousel4.png'
import Carousel5 from '../../assets/carousel/carousel5.jpeg'
import Carousel6 from '../../assets/carousel/carousel6.png'
import Carousel7 from '../../assets/carousel/carousel7.jpg'

import styles from './landing.module.scss'

const CarouselComponent = () => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
            </ol>
            <div className={`carousel-inner ${styles.carousel_slides_container}`}>
                <div className={`carousel-item active ${styles.carousel_slide}`} style={{ backgroundImage: `url(${Carousel1})` }} data-interval="3000">
                    {/**<img src={RioCeleste} className="d-block" alt="Rio Celeste" />*/}

                    <div className="carousel-caption d-none d-md-block">
                        <p>Luxury, Lake View Residential Property in Gated Community</p>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${Carousel2})` }} data-interval="3000">
                    {/**<img src={LakeArenal} className="d-block" alt="Lake Arenal" />*/}
                    <div className="carousel-caption d-none d-md-block">
                        
                        <p>Spectacular Lake View Lots</p>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${Carousel3})` }} data-interval="3000">
                    {/**<img src={LakeArenal2} className="d-block" alt={LakeArenal2} />*/}
                    <div className="carousel-caption d-none d-md-block">
                      
                        <p>Amazing Lake View Home with Indoor, In ground Swimming Pool</p>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${Carousel4})` }} data-interval="3000">
                    {/**<img src={LakeArenal2} className="d-block" alt={LakeArenal2} />*/}
                    <div className="carousel-caption d-none d-md-block">
                      
                        <p>Incredible Home in the Heart of Town</p>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${Carousel5})` }} data-interval="3000">
                    {/**<img src={LakeArenal2} className="d-block" alt={LakeArenal2} />*/}
                    <div className="carousel-caption d-none d-md-block">
                      
                        <p>Dreamy Mountain Retreat</p>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${Carousel6})` }} data-interval="3000">
                    {/**<img src={LakeArenal2} className="d-block" alt={LakeArenal2} />*/}
                    <div className="carousel-caption d-none d-md-block">
                      
                        <p>Super Private, American Style Property Walking Distance to Lake Arenal</p>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carousel_slide}`} style={{ backgroundImage: `url(${Carousel7})` }} data-interval="3000">
                    {/**<img src={LakeArenal2} className="d-block" alt={LakeArenal2} />*/}
                    <div className="carousel-caption d-none d-md-block">
                      
                        <p>Mountain Hotel with Gorgeous Volcano Views</p>
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