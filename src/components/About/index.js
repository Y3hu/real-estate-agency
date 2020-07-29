import React from 'react'
import * as STRINGS from '../../constants/strings'
import styles from './about.module.scss'

import About_Desktop from '../../assets/about/about5.jpeg'
import About_Mobile from '../../assets/about/about.jpeg'
import ProfileCardComponent from './ProfileCard'

const AboutComponent = ({ language }) => {
    //console.log(process.env.REACT_APP_LOCATION_API_KEY)

    return (
        <div className={`${styles.about_container}`}>
            <div className={styles.media_container}>
                <figure className="figure">
                    <img title="Lake Arenal" src={About_Desktop} className={`figure-img img-fluid ${styles.image_desktop}`} alt="Lake Arenal View Desktop" />
                    <img title="Lake Arenal" src={About_Mobile} className={`figure-img img-fluid ${styles.image_mobile}`} alt="Lake Arenal View Mobile" />
                    <figcaption>El Lago Properties on Lake Arenal</figcaption>
                </figure>
                <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.010192539369!2d-84.94510598520164!3d10.49986219250958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI5JzU5LjUiTiA4NMKwNTYnMzQuNSJX!5e0!3m2!1sen!2scr!4v1595890962589!5m2!1sen!2scr" width="600" height="450" frameBorder="0" style={{ border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className={styles.info_container}>
                <div className={styles.info_left}>
                    <h1>{!language ? 'ABOUT US!' : STRINGS.ABOUTUS}</h1>
                    <p>
                        {!language ? 'El Lago Properties on Lake Arenal is a full service real estate company offering our clients a variety of services. Our mission is to help you find your little piece of paradise in Costa Rica and make your move as easy as possible.' : STRINGS.AFIRSTPARAGRAPH}
                    </p>
                    <p>
                        {!language ? 'We are here to assist our clients with the purchase of any kind of property in the Lake Arenal or Greater Tilaran Area.  We specialize in residential, commercial and rental properties as well as raw land and up and coming developments.  No matter what type of property you are looking to buy, we will customize our search and take as much time as needed to help you a perfect match!' : STRINGS.ASECONDPARAGRAPH}
                    </p>
                    <p>
                        {
                            !language ? 'We’d also be happy to provide you with any information or assistance that you might need before, during or after the purchase process in a transparent, low-pressure environment.  We do whatever we can to make you transition to Costa Rica as smooth and hassle-free as possible.' : STRINGS.ATHIRDPARAGRAPH
                        }
                    </p>
                </div>
                <div className={styles.info_right}>
                    <p>
                        {!language ? 'Some of our services include: ' : STRINGS.AFOURTHPARAGRAPH}
                    </p>

                    <ul>
                        <li>{ !language ? 'Property Sales' : STRINGS.AFIRSTLI}</li>
                        <li>{ !language ? 'Rental Properties' : STRINGS.ASECONDLI}</li>
                        <li>{ !language ? 'Property Management' : STRINGS.ATHIRDLI}</li>
                        <li>{ !language ? 'Construction' : STRINGS.AFOURTHLI}</li>
                        <li>{ !language ? 'Relocation Assistance' : STRINGS.AFIFTHLI}</li>
                        <li>{ !language ? 'Translation Services' : STRINGS.ASIXTHLI}</li>
                    </ul>

                    <div className={styles.profile_card_component}>
                        <ProfileCardComponent />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default AboutComponent