import React from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import useFormHook from '../../hooks/formHook'

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
)

const INITIAL_STATE = {
  email: '',
  error: null,
}

const PasswordForgetFormBase = props => {

  const { state, changeState, cleanState } = useFormHook({ ...INITIAL_STATE })

  const onSubmit = event => {
    const { email } = state
    event.preventDefault()

    props.firebase
      .doPasswordReset(email)
      .then(() => {
        cleanState({ ...INITIAL_STATE })
        window.confirm("If the email belongs to a registered account, you'll receive a message...")
      })
      .catch(error => changeState({
        target: {
          name: "error",
          value: error
        }
      }))
  }


  let { email, error } = state
  let isInvalid = email === ''

  return (


    <div className="card" style={{ minHeight: "15rem" }}>
      <div className="card-header" style={{ color: "#00008B", minWidth: "100%" }}>
        <h6>Forgot Password? Send link to email</h6>
      </div>
      <div className="card-body">

        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                className="form-control mb-3"
                name="email"
                value={state.email || ''}
                onChange={changeState}
                type="text"
                placeholder="Email Address"
              />
            </div>

            {error && <p>{error.message}</p>}
          </div>

          <button className="btn btn-primary btn-block" style={{ backgroundColor: "#00008B" }} disabled={isInvalid} type="submit">
            Send email
              </button>

        </form>

      </div>
      <div className="card-footer">
        <div style={{ display: "flex", flexFlow: "row no wrap", justifyContent: "space-between", alignItems: "center" }}>

        </div>
      </div>
    </div>

  )

}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET} style={{ color: "#00008B" }}>Forgot Password?</Link>
  </p>
)

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }