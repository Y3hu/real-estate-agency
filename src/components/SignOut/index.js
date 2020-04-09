import React from 'react'
import { withFirebase } from '../Firebase'

const SignOutButton = ({ firebase }) => (
  <i className="nav-link" style={{color: "white", textAlign: "center"}} type="button" onClick={firebase.doSignOut}>
    Sign Out
  </i>
)

export default withFirebase(SignOutButton)