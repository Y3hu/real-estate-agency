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
                    <p>To request more information, leave feedback, or just say hello - please contact us.</p>
                    <p>Please fill in all required fields and you will be contacted as soon as possible!</p>
                    <p>Also, feel free to send me a direct email to <a href="mailto:info@ellagoarenal.com?Subject=Hello" target="_top">info@ellagoarenal.com</a></p>
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