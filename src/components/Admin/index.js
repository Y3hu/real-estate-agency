import React, { useEffect, useState } from 'react'

import { AuthUserContext, withAuthorization } from '../Session'

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
                <div className="container">
                    <h1>Hi {authUser.email}</h1>
                    {loading && <div>Loading ...</div>}
                    <UserList users={users} />
                </div>
            }
        </AuthUserContext.Consumer>
    )
}

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
                <span>
                    <strong>ID:</strong> {user.uid}
                </span>
                <span>
                    <strong>E-Mail:</strong> {user.email}
                </span>
                <span>
                    <strong>Username:</strong> {user.username}
                </span>
            </li>
        ))}
    </ul>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(AdminComponent)