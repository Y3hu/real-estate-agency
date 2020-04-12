import React from 'react'

import styles from './contact.module.scss'
import FormComponent from './form'

const ContactComponent = props => {

    return(
        <div className={styles.contact_container}>
            <div className={styles.contact_top_section}>
                <div className={styles.contact_top_section_left}>
                    <h1>El Lago Real Estate</h1>
                    <hr />
                    <p className={`lead ${styles.color}`}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className={`${styles.color}`}>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                </div>
                <div className={styles.contact_top_section_right}>
                    <iframe title="lake arenal" width="560" height="315" src="https://www.youtube.com/embed/79aQnf_W8mo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                    </iframe>
                </div>
            </div>
            <div className={styles.contact_bottom_section}>
                <div className={styles.contact_bottom_section_left}>
                    <FormComponent />
                </div>
                <div className={styles.contact_bottom_section_right}>
                    <iframe title="lake arenal" width="560" height="315" src="https://www.youtube.com/embed/79aQnf_W8mo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent