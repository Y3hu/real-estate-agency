import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import { compose } from 'recompose'
import useFormHook from '../../hooks/formHook'
import styles from './signup.module.css'

const SignUpComponent = () => (
  <div>
    <h1 className={styles.title}>SignUp</h1>
    
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
  const { state, changeState, cleanState } = useFormHook({...INITIAL_STATE})

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
      .set({username, email})
    })
    .then(() => {
      cleanState({...INITIAL_STATE})
      history.push(ROUTES.ADMIN)
    })
    .catch(error => changeState({ error }))

  }
  
  return (
    <form onSubmit={onSubmit}>
      <input
          name="username"
          value={state.username || ''}
          onChange={changeState}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={state.email || ''}
          onChange={changeState}
          type="email"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={state.passwordOne || ''}
          onChange={changeState}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={state.passwordTwo || ''}
          onChange={changeState}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>
        {state.error && <p>{state.error.message}</p>}
    </form>
  )
  
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase)

export default SignUpComponent

export { SignUpForm, SignUpLink }