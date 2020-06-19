import React, { useEffect, useState } from 'react'
import { SignUpLink } from '../SignUp'
import { Spinner } from '../Shared'

import { AuthUserContext, withAuthorization } from '../Session'

import styles from './admin.module.scss'

const AdminComponent = ({ firebase }) => {

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

    return (
        <AuthUserContext.Consumer>
            {authUser =>
                <div className={styles.admin_container}>
                    <div className={styles.admin_top}>
                        <h1>Users Manager</h1>
                    </div>
                    {
                        loading ? <Spinner /> : <><SignUpLink /><UsersTable users={users} /></>
                    }
                </div>
            }
        </AuthUserContext.Consumer>
    )
}

const UsersTable = ({ users }) => (
    <div className="table-responsive">
        <table className="table table-bordered table-dark">
            <thead style={{ backgroundColor: "#0e0e95" }}>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr>
                        <td>{user.uid}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(AdminComponent)