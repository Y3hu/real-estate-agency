import React from 'react'
import TabsComponent from './Tabs'
import AlertHook from '../../hooks/alertHook'

import styles from './manager-properties.module.scss'

import { withAuthorization } from '../Session'
import AlertComponent from '../Shared/Alert'

const PropertiesManagementComponent = () => {
    const { added, showAlertMessage } = AlertHook()

    return (
        <div className={styles.manager_properties_container}>
            <div className={styles.manager_top}>
                <h1>Add a new property</h1>
            </div>
            <div className={styles.manager_bottom}>
                <TabsComponent showAlertMessage={showAlertMessage} />
            </div>
            {
                (added) ? <AlertComponent message="Property added successfully!" /> : ''
            }
        </div>
    )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(PropertiesManagementComponent)