import React, { useState, useEffect } from 'react'
import { compose } from 'recompose'
import { withFirebase } from '../Firebase'
import { withAuthorization } from '../Session'

import { Spinner, Alert, Carousel } from '../Shared'
import Images from './images'

import AlertHook from '../../hooks/alertHook'

import styles from './carousel-manager.module.scss'

const HomeComponent = ({ firebase }) => {
    const [loading, setLoading] = useState(true)
    const [dbImages, setDbImages] = useState([])

    const { added, showAlertMessage } = AlertHook()

    useEffect(() => {
        setLoading(true)

        firebase.images().on('value', snapshot => {
            // eslint-disable-next-line
            const carouselObject = snapshot.val()

            for (let key in carouselObject) {
                let image = { uid: key, ...carouselObject[key] }

                let found = dbImages.find(i => i.uid === image.uid)
                if (!found) setDbImages(images => [...images, image])
            }
            setLoading(false)
        })

        return () => firebase.images().off()

    }, [firebase, dbImages])

    return (
        <div className={`${styles.manager_properties_container}`}>
            <div className={styles.manager_top}>
                <h1>Carousel Manager</h1>
            </div>
            {
                (loading) ? <Spinner /> :
                    <React.Fragment>
                        <div className={styles.carousel_container} style={{ minHeight: "20vh" }}>
                            <Carousel dbImages={dbImages} />
                        </div>

                        <Images firebase={firebase} setDbImages={setDbImages} showAlertMessage={showAlertMessage} dbImages={dbImages} />
                        {
                            (added) ? <Alert message="Images added successfully!" /> : ''
                        }

                    </React.Fragment>
            }

        </div>
    )
}

const condition = authUser => !!authUser

const Home = compose(
    withAuthorization(condition),
    withFirebase
)(HomeComponent)

export default Home