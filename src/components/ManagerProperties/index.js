import React, { useState } from 'react'

import TabsComponent from './Tabs'
//import MultiStepForm from './MultiStepForm'

import styles from './manager-properties.module.scss'

import { withAuthorization } from '../Session'

const PropertiesManagementComponent = () => {
    const [added, setAdded] = useState(false)

    const showAlertMessage = _ => {
        setAdded(!added)
        setTimeout(() => {
            setAdded(!added)
        }, 1500)
    }

    return (
        <div className={styles.manager_properties_container}>
            <div className={styles.manager_top}>
                <h1>Properties Manager</h1>
            </div>
            <div className={styles.manager_bottom}>
                <TabsComponent showAlertMessage={showAlertMessage} />
            </div>
            {
                (added) ? <div className="alert alert-success" role="alert">
                    Property added
            </div> : ''
            }
        </div>
    )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(PropertiesManagementComponent)