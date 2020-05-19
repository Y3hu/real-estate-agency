import React from 'react'

import House from '../../../assets/house.jpeg'
import styles from '../manager-properties.module.scss'

const AssetsComponent = ({ setForm, formData, navigation }) => {
    //const { images, video } = formData

    const { previous, next } = navigation

    return (
        <div className={styles.details_form_container}>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tag}>
                    <p>Images</p>
                </div>
                <div className={styles.details_form_container_images}>
                    <figure className="figure">
                        <img src={House} className="figure-img img-fluid img-thumbnail rounded" alt="..." />
                    </figure>
                    <figure className="figure">
                        <img src={House} className="figure-img img-fluid img-thumbnail rounded" alt="..." />
                    </figure>
                    <figure className="figure">
                        <img src={House} className="figure-img img-fluid img-thumbnail rounded" alt="..." />
                    </figure>
                </div>
            </div>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tag}>
                    <p>Video</p>
                </div>

                <div class="embed-responsive embed-responsive-16by9">
                    <iframe title="video" class="embed-responsive-item" src="https://www.youtube.com/embed/1y6smkh6c-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>

            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default AssetsComponent