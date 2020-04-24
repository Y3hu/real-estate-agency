import React from 'react'

import TabsComponent from './tabs'

import styles from './manager-properties.module.scss'

import { withAuthorization } from '../Session'

const PropertiesManagementComponent = () => {

    return (
        <div className={styles.manager_properties_container}>
            <div className={styles.manager_top}>
                <h1>Properties Manager</h1>
            </div>
            <div className={styles.manager_bottom}>
                <TabsComponent />
            </div>
        </div>
    )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(PropertiesManagementComponent)