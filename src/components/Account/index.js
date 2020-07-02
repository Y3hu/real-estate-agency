import React, { useState, useEffect } from 'react'

import { AuthUserContext, withAuthorization } from '../Session'
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import { Modal, Spinner } from '../Shared'

import styles from './account.module.scss'

const AccountComponent = ({ firebase }) => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {

        setLoading(true)
        firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val()

            for (let key in usersObject) {
                let user = {
                    uid: key,
                    ...usersObject[key]
                }

                setUsers(u => [...u, user])
            }

            setLoading(false)
        })

        return () => firebase.users().off()

    }, [firebase])

    const deleteAccount = email => {

        let { uid } = users.find(u => u.email === email)


        if (uid) {

            //Delete user from the firebase user acoounts list
            firebase.doDeleteUser()
                .then(res => {
                    console.log(res)
                    // Delete user from the database
                    firebase.user(uid)
                        .remove()
                        .then(() => {
                            window.location = "/signin"
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <AuthUserContext.Consumer>
            {authUser =>
                <div className={styles.account_container} >
                    {
                        loading ? <Spinner /> :
                            <>
                                <div className={styles.account_top}>
                                    <h1>Account Manager</h1>
                                </div>
                                <div className={styles.password_card}>
                                    <PasswordForgetForm />
                                </div>
                                <div className={styles.password_card}>
                                    <PasswordChangeForm email={authUser.email} />
                                </div>
                                <div style={{ marginTop: "2.5vh", width: "90%" }}>
                                    <Modal buttonName={` Delete ${authUser.email} account!`} message={`Are you sure you want to delete ${authUser.email} account?`} classes="btn btn-outline-danger btn-lg btn-block fas fa-user-times" func={deleteAccount} userEmail={authUser.email} />
                                </div>
                            </>
                    }
                </div>
            }
        </AuthUserContext.Consumer>
    )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountComponent)