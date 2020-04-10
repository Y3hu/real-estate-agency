import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import SignOut from '../SignOut'
import Logo from '../../assets/logo.png'

import { AuthUserContext } from '../Session'

import styles from './navigation.module.scss'

const NavigationComponent = () => (
    <div className={styles.nav_container}>
        <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
        </AuthUserContext.Consumer>
    </div>
)

const NavigationAuth = () => (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.nav_container}`}>
        <div className={`navbar-brand ${styles.logo_search_input}`}>
            <img className={styles.logo} src={Logo} title="logo" alt="logo" />
            <form className={styles.form}>
                <div class="input-group">
                    <input class="form-control border-right-0" placeholder="listing code"/>
                    <span class="input-group-append bg-white">
                        <button class="btn border border-left-0" type="button"><i class="fas fa-search"></i></button>
                    </span>
                </div>
            </form>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.nav_list}`} id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white", textAlign: "center"}}>Landing <span className="sr-only">(current)</span></Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.HOME} className="nav-link" style={{color: "white", textAlign: "center"}}>Home</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.ACCOUNT} className="nav-link" style={{color: "white", textAlign: "center"}}>Account</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.ADMIN} className="nav-link" style={{color: "white", textAlign: "center"}}>Admin</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <SignOut />
                </li>
            </ul>
        </div>
    </nav>
)

const NavigationNonAuth = () => (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.nav_container}`}>
        <div className={`navbar-brand ${styles.logo_search_input}`}>
            <img className={styles.logo} src={Logo} title="logo" alt="logo" />
            <form className={styles.form}>
                <div className="input-group">
                    <input className="form-control border-right-0" placeholder="listing code"/>
                    <span className="input-group-append bg-white">
                        <button className="btn border border-left-0" type="button"><i className="fas fa-search"></i></button>
                    </span>
                </div>
            </form>
        </div>
        <button className={`navbar-toggler ${styles.nav_button}`} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.nav_list}`} id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white", textAlign: "center"}}>Home</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white", textAlign: "center"}}>Properties</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white", textAlign: "center"}}>Construction</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white", textAlign: "center"}}>About</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white", textAlign: "center"}}>Contact</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.SIGN_IN} className="nav-link" style={{color: "white", textAlign: "center"}}>Sign In</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavigationComponent