import React from 'react'
import * as STRINGS from '../../constants/strings'
import styles from './about.module.scss'

import About_Image from '../../assets/about_image.jpg'

const AboutComponent = ({ language }) => {
    console.log(process.env.REACT_APP_LOCATION_API_KEY)

    return (
        <div className={`${styles.about_container}`}>
            <div className={styles.media_container}>
                <figure className="figure">
                    <img title="Lake Arenal" src={About_Image} className="figure-img img-fluid" alt="Lake Arenal View" />
                    <figcaption>El Lago Properties on Lake Arenal</figcaption>
                </figure>
                <iframe title="location" width="600" height="450" frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?q=Highway+142+50807+Arenal,+Guanacaste,+Costa+Rica&key=${process.env.REACT_APP_LOCATION_API_KEY}`} allowFullScreen></iframe>
            </div>
            <div className={styles.info_container}>
                <div className={styles.info_left}>
                    <h1>{!language ? 'ABOUT US!' : STRINGS.ABOUTUS}</h1>
                    <p>
                        {!language ? 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.' : STRINGS.AFIRSTPARAGRAPH}
                    </p>
                    <p>
                        {!language ? 'It uses utility classNamees for typography and spacing to space content out within the larger container.' : STRINGS.ASECONDPARAGRAPH}
                    </p>
                </div>
                <div className={styles.info_right}>
                    <p>
                        {!language ? 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information465465465 465 4654564 65465 4654564654.' : STRINGS.ATHIRDPARAGRAPH}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutComponent