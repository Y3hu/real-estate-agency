import React from 'react'

import { AuthUserContext, withAuthorization } from '../Session'
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'

import styles from './account.module.scss'

const AccountComponent = props => (
    <AuthUserContext.Consumer>
        {authUser =>
            <div className={styles.account_container}>
                <div className={styles.account_top}>
                    <h1>Account Manager</h1>
                </div>
                <div className={styles.password_card}>
                    <PasswordForgetForm />
                </div>
                <div className={styles.password_card}>
                    <PasswordChangeForm email={authUser.email} />
                </div>
            </div>
        }
    </AuthUserContext.Consumer>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountComponent)