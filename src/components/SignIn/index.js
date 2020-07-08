import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { PasswordForgetLink } from '../PasswordForget'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import * as STRINGS from '../../constants/strings'
import useFormHook from '../../hooks/formHook'
import styles from './signin.module.scss'

const SignInPage = ({ language }) => (
  <div className={`container pt-3 ${styles.signIn_container}`}>
    <div className="row justify-content-sm-center">
      <div className="col-sm-10 col-md-6">
        <div className="card border-info">
          <div className="card-header" style={{ color: "#00008B" }}>{!language ? 'Sign In' : STRINGS.SSIGNIN}</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 text-center">
                <img src="https://placeimg.com/128/128/nature" alt="profile" />
              </div>
              <div className="col-md-8">
                <SignInForm language={language} />
              </div>

            </div>
          </div>
          <div className="card-footer">
            <div style={{ display: "flex", flexFlow: "row no wrap", justifyContent: "space-between", alignItems: "center" }}>
              <PasswordForgetLink language={language} />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const SignInFormBase = ({ firebase, history, language }) => {
  //const [state, setState] = useState({...INITIAL_STATE})
  const { state, changeState, cleanState } = useFormHook({ ...INITIAL_STATE })

  const onSubmit = event => {
    const { email, password } = state
    event.preventDefault()

    firebase.doSignInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        cleanState({ ...INITIAL_STATE })
        history.push(ROUTES.MANAGEPROPERTIES)
      })
      .catch(error => changeState({
        target: {
          name: "error",
          value: error
        }
      }))

  }

  let isInvalid = state.password === '' || state.email === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control mb-2"
        name="email"
        value={state.email || ''}
        onChange={changeState}
        type="text"
        placeholder={!language ? 'Email Address' : STRINGS.EMAIL}
        required autoFocus
      />
      <input
        className="form-control mb-2"
        name="password"
        value={state.password || ''}
        onChange={changeState}
        type="password"
        placeholder={!language ? 'Password' : STRINGS.PASSWORD}
        required
      />
      <button className="btn btn-lg btn-primary btn-block mb-1" style={{ backgroundColor: "#00008B" }} type="submit" disabled={isInvalid}>{!language ? 'Sign In' : STRINGS.SSIGNIN}</button>
      {state.error && <p style={{ color: "#00008B" }}>{state.error.message}</p>}
    </form>
  )

}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase)

export default SignInPage
export { SignInForm }