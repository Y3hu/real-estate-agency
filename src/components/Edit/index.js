import React, { useEffect, useState } from 'react'
import CardsComponent from './cards'
import TabsComponent from './Tabs'
import { Alert, Spinner } from '../Shared'

import AlertHook from '../../hooks/alertHook'
import { useParams } from 'react-router-dom'

import { withFirebase } from '../Firebase'

import styles from './properties.module.scss'

const PropertiesComponent = ({ firebase }) => {
    const [dbProperties, setDbProperties] = useState([])
    const [property, setProperty] = useState({})
    const [loading, setLoading] = useState(false)

    const { added, showAlertMessage } = AlertHook()
    let { filter } = useParams();
    console.log(filter)

    useEffect(() => {
        setLoading(true)
        firebase.properties().on('value', snapshot => {
            const propertiesObject = snapshot.val()

            for (let key in propertiesObject) {
                let propertie = {
                    uid: key,
                    ...propertiesObject[key]
                }

                setDbProperties(p => [...p, propertie])
            }
            setLoading(false)
        })


        return () => {
            firebase.properties().off()
        }
    }, [firebase])

    return (
        <div className={styles.properties_container}>
            <div className={styles.manager_top}>
                <h1>Edit a property</h1>
            </div>
            {
                (Object.keys(property).length) ?
                    <>
                        <TabsComponent showAlertMessage={showAlertMessage} property={property} />
                        {
                            (added) ? <Alert message="Property added successfully!" /> : ''
                        }
                    </>

                    :
                    <div className={styles.properties_bottom}>
                        {
                            (dbProperties.length > 0 && !loading) ?
                                dbProperties.map((p, i) => (
                                    <CardsComponent key={i} info={p} onSelect={setProperty} />
                                )) : <Spinner />
                        }
                    </div>
            }



        </div >
    )
}

export default withFirebase(PropertiesComponent)