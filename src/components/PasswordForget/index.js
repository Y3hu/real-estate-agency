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

  const {state, changeState, cleanState} = useFormHook({...INITIAL_STATE})

  const onSubmit = event => {
    const { email } = state
    event.preventDefault()

    props.firebase
      .doPasswordReset(email)
      .then(() => {
        cleanState({ ...INITIAL_STATE })
        window.confirm("If the email belongs to a registered account, you'll receive a message...")
      })
      .catch(error => {
        changeState({ error })
      })
  }

  
    let { email, error } = state
    let isInvalid = email === ''

    return (
        <form onSubmit={onSubmit}>
        <input
            name="email"
            value={state.email || ''}
            onChange={changeState}
            type="text"
            placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
            Reset My Password
        </button>
        {error && <p>{error.message}</p>}
        </form>
    )

}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
)

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }