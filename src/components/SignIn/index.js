import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { SignUpLink } from '../SignUp'
import { PasswordForgetLink } from '../PasswordForget'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import useFormHook from '../../hooks/formHook'
import styles from './signin.module.css'

const SignInPage = () => (
  <div>
    <h1 className={styles.title}>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
)

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const SignInFormBase = props =>  {
  //const [state, setState] = useState({...INITIAL_STATE})
  const { state, changeState, cleanState } = useFormHook({...INITIAL_STATE})

  const onSubmit = event => {
    const { email, password } = state
    event.preventDefault()

    props.firebase.doSignInWithEmailAndPassword(email.trim(), password)
    .then(() => {
        cleanState({...INITIAL_STATE})
        props.history.push(ROUTES.HOME)
    })
    .catch(error => {
        changeState({ error })
    })

  }

    let isInvalid = state.password === '' || state.email === ''

    return (
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={state.email || ''}
          onChange={changeState}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={state.password || ''}
          onChange={changeState}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {state.error && <p>{state.error.message}</p>}
      </form>
    )
  
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase)

export default SignInPage
export { SignInForm }