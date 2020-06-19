import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import { compose } from 'recompose'
import useFormHook from '../../hooks/formHook'

const SignUpComponent = () => (
  <div>
    <SignUpForm />
  </div>
)

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

const SignUpFormBase = ({ history, firebase }) => {
  //const [state, setState] = useState(INITIAL_STATE)
  const { state, changeState, cleanState } = useFormHook({ ...INITIAL_STATE })

  let isInvalid =
    state.passwordOne !== state.passwordTwo ||
    state.passwordOne === '' ||
    state.email === '' ||
    state.username === ''

  const onSubmit = e => {
    e.preventDefault()
    const { username, email, passwordOne } = state

    firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        firebase.user(authUser.user.uid)
          .set({ username, email })
      })
      .then(() => {
        cleanState({ ...INITIAL_STATE })
        history.push(ROUTES.ADMIN)
      })
      .catch(error => changeState({
        target: {
          name: "error",
          value: error
        }
      }))

  }

  return (
    <div className={`container pt-3`} style={{ marginTop: "3.5vh" }}>
      <div className="row justify-content-sm-center">
        <div className="col-sm-10 col-md-6">
          <div className="card border-info">
            <div className="card-header" style={{ color: "#00008B" }}>
              <h4>Register New User</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <form onSubmit={onSubmit}>
                    <input
                      className="form-control mb-2"
                      name="username"
                      value={state.username || ''}
                      onChange={changeState}
                      type="text"
                      placeholder="Full Name"
                    />
                    <input
                      className="form-control mb-2"
                      name="email"
                      value={state.email || ''}
                      onChange={changeState}
                      type="email"
                      placeholder="Email Address"
                    />
                    <input
                      className="form-control mb-2"
                      name="passwordOne"
                      value={state.passwordOne || ''}
                      onChange={changeState}
                      type="password"
                      placeholder="Password"
                    />
                    <input
                      className="form-control mb-2"
                      name="passwordTwo"
                      value={state.passwordTwo || ''}
                      onChange={changeState}
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <button className="btn btn-lg btn-primary btn-block mb-1" style={{ backgroundColor: "#00008B" }} disabled={isInvalid} type="submit">Register</button>
                    {state.error && <p style={{ color: "#00008B" }}>{state.error.message}</p>}
                  </form>
                </div>

              </div>
            </div>
            <div className="card-footer">
              <div style={{ display: "flex", flexFlow: "row no wrap", justifyContent: "space-between", alignItems: "center" }}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

const SignUpLink = () => (
  <p>
    Add a new account? <Link to={ROUTES.SIGN_UP} style={{ color: "#FFF" }}>Register</Link>
  </p>
)

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase)

export default SignUpComponent

export { SignUpForm, SignUpLink }