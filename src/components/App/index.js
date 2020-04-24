import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { withAuthentication } from '../Session'

import Navigation from '../Navigation'
import FooterComponent from '../Footer'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import ManagerProperties from '../ManagerProperties'
import AccountPage from '../Account'
import AdminPage from '../Admin'
import About from '../About'
import Contact from '../Contact'
import Properties from '../Properties'
import * as ROUTES from '../../constants/routes'

import styles from './app.module.scss'

const App = () => {
  return (
    <Router>
      <header>
        <Navigation />
      </header>
      <main className={styles.main_container}>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.MANAGEPROPERTIES} component={ManagerProperties} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.CONTACT} component={Contact} />
        <Route path={ROUTES.PROPERTIES} component={Properties} />
      </main>
      <FooterComponent />
    </Router>
  )
}

export default withAuthentication(App)