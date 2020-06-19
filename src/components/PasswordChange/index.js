import React, { useState } from 'react'
import { withFirebase } from '../Firebase'
import useFormHook from '../../hooks/formHook'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

const PasswordChangeForm = ({ firebase, email }) => {
  const { state, changeState, cleanState } = useFormHook({ ...INITIAL_STATE })
  const [message, setMessage] = useState(null)

  const onSubmit = event => {
    event.preventDefault()
    const { passwordOne } = state

    firebase.doPasswordUpdate(passwordOne)
      .then(() => {
        cleanState({ ...INITIAL_STATE })
        setMessage("Password changed successfully")
      })
      .catch(error => changeState({
        target: {
          name: "error",
          value: error
        }
      }))

  }

  let { passwordOne, passwordTwo, error } = state
  let isInvalid = passwordOne !== passwordTwo || passwordOne === ''

  return (

    <div className="card" style={{ minHeight: "15rem" }}>
      <div className="card-header" style={{ color: "#00008B" }}>
        <h6>Change Password for: {email}</h6>
      </div>
      <div className="card-body">

        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                className="form-control mb-3"
                name="passwordOne"
                value={passwordOne || ''}
                onChange={changeState}
                type="password"
                placeholder="New Password"
              />
            </div>
            <div className="col">
              <input
                className="form-control mb-3"
                name="passwordTwo"
                value={passwordTwo || ''}
                onChange={changeState}
                type="password"
                placeholder="Confirm New Password"
              />
            </div>

            <button className="btn btn-primary btn-block mb-1" style={{ backgroundColor: "#00008B" }} disabled={isInvalid} type="submit">
              Set new Password
                    </button>
            {error && <p>{error.message}</p>}
            {message && <p>{message}</p>}
          </div>
        </form>

      </div>
      <div className="card-footer">
        <div style={{ display: "flex", flexFlow: "row no wrap", justifyContent: "space-between", alignItems: "center" }}>

        </div>
      </div>
    </div>
  )
}

export default withFirebase(PasswordChangeForm)