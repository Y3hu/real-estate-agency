import React from 'react'

import styles from './about.module.scss'

import About_Image from '../../assets/about_image.jpg'

const AboutComponent = props => {
    console.log(process.env.REACT_APP_LOCATION_API_KEY)
    
    return(
        <div className={`container ${styles.about_container}`}>
            <div className={styles.media_container}>
                <figure className="figure">
                    <img title="Lake Arenal" src={About_Image} className="figure-img img-fluid" alt="Lake Arenal View" />
                    <figcaption>EL LAGO - PROPERTIES AND CONSTRUCTION ON LAKE ARENAL</figcaption>
                </figure>
                <iframe title="location" width="600" height="450" frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?q=Highway+142+50807+Arenal,+Guanacaste,+Costa+Rica&key=${process.env.REACT_APP_LOCATION_API_KEY}`} allowFullScreen></iframe>

            </div>
            <div className={styles.info_container}>
                <div className={styles.info_left}>
                    <h1>ABOUT US!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                </div>
                <div className={styles.info_right}>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information465465465 465 4654564 65465 4654564654.</p>
                </div>
                
            </div>
        </div>
    )
}

export default AboutComponent