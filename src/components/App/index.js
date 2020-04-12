import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { withAuthentication } from '../Session'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'
import About from '../About'
import Contact from '../Contact'
import * as ROUTES from '../../constants/routes'

import styles from './app.module.scss'

const App = () => {
  return(
    <Router>
      
        <Navigation />
        <div className={styles.main_container}>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.CONTACT} component={Contact} />
        </div>
      
    </Router>
  )
}

export default withAuthentication(App)