import React from 'react'
import { withFirebase } from '../Firebase'
import useFormHook from '../../hooks/formHook'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

const PasswordChangeForm = ({ firebase }) => {
  const { state, changeState, cleanState } = useFormHook({ ...INITIAL_STATE })

  const onSubmit = event => {
    const { passwordOne } = state
    event.preventDefault()
    
    firebase.doPasswordUpdate(passwordOne)
    .then(() => cleanState({ ...INITIAL_STATE }) )
    .catch(error => changeState({ error }) )
    
  }

    let { passwordOne, passwordTwo, error } = state
    let isInvalid = passwordOne !== passwordTwo || passwordOne === ''

    return (
      <form onSubmit={onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne || ''}
          onChange={changeState}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo || ''}
          onChange={changeState}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    )
}

export default withFirebase(PasswordChangeForm)