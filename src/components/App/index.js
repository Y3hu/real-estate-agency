import React, { useState } from 'react'
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
  const [language, setLanguage] = useState(false)

  const changeLanguage = _ => {
    let input = document.getElementById("toggle-state")
    setLanguage(input.checked)
  }

  return (
    <Router>
      <header>
        <Navigation changeLanguage={changeLanguage} language={language} />
      </header>
      <main className={styles.main_container}>
        <Route exact path={ROUTES.HOME}> <HomePage language={language} /> </Route>
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} > <SignInPage language={language} /> </Route>
        <Route path={ROUTES.PASSWORD_FORGET}> <PasswordForgetPage language={language} /> </Route>
        <Route path={ROUTES.MANAGEPROPERTIES} component={PropertiesManager} />
        <Route path={ROUTES.CAROUSEL} component={CarouselManager} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.ABOUT}> <About language={language} /> </Route>
        <Route path={ROUTES.CONTACT}> <Contact language={language} /> </Route>
        <Route path={`${ROUTES.PROPERTIES}/:filter`}> <Properties language={language} /> </Route>
      </main>
      <FooterComponent />
    </Router>
  )
}

export default withAuthentication(App)