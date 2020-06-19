import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { withAuthentication } from '../Session'

import Navigation from '../Navigation'
import FooterComponent from '../Footer'
import HomePage from '../Home'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import CarouselManager from '../CarouselManager'
import Account from '../Account'
import PropertiesManager from '../PropertiesManager'
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
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.MANAGEPROPERTIES} component={PropertiesManager} />
        <Route path={ROUTES.CAROUSEL} component={CarouselManager} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.CONTACT} component={Contact} />
        <Route path={`${ROUTES.PROPERTIES}/:filter`} component={Properties} />
      </main>
      <FooterComponent />
    </Router>
  )
}

export default withAuthentication(App)