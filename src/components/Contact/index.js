import React from 'react'
import * as STRINGS from '../../constants/strings'
import styles from './contact.module.scss'
import { Form } from '../Shared'

const ContactComponent = ({ language }) => {

    return (
        <div className={styles.contact_container}>
            <div className={styles.contact_top_section}>
                
                <h1>El Lago Properties on Lake Arenal</h1>
                <hr />
                <p>
                    {!language ? 'If you would like more information about one of our listings or if you would like to list your property for sale with us, please fill out the following form and we will contact you as soon as possible.' : STRINGS.CFIRSTPARAGRAPH}
                </p>
                <p>
                    {!language ? 'Also, feel free to send us a direct email to' : STRINGS.CSECONDPARAGRAPH} <a href="mailto:info@ellagoarenal.com?Subject=Hello" target="_top">info@ellagoarenal.com</a>
                    {!language ? ' or give us a call at ' : STRINGS.CTHIRDPARAGRAPH } <a href="tel:+1 (506) 8339-1770.">+1 (506) 8339-1770.</a>
                </p>
                <p className={styles.text}>
                    {!language ? 'Pura Vida!' : STRINGS.CFOURTHPARAGRAPH} 
                </p>
                
            </div>
            <div className={styles.contact_bottom_section}>
                <div className={styles.contact_bottom_section_left}>
                    <Form language={language} />
                </div>
                <div className={styles.contact_bottom_section_right}>
                    <iframe title="lake arenal" width="560" height="335" src="https://www.youtube.com/embed/79aQnf_W8mo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent