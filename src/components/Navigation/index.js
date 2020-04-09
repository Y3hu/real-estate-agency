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
    <nav className={`navbar fixed-top navbar-expand-lg ${styles.nav_background}`}>
        <img className={`navbar-brand ${styles.logo}`} src={Logo} title="logo" alt="logo" /> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white"}}>Landing <span className="sr-only">(current)</span></Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.HOME} className="nav-link" style={{color: "white"}}>Home</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.ACCOUNT} className="nav-link" style={{color: "white"}}>Account</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                <Link to={ROUTES.ADMIN} className="nav-link" style={{color: "white"}}>Admin</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <SignOut />
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            </form>
        </div>
    </nav>
)

const NavigationNonAuth = () => (
    <nav className={`navbar fixed-top navbar-expand-lg ${styles.nav_background}`}>
        <img className={`navbar-brand ${styles.logo}`} src={Logo} title="logo" alt="logo" /> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white"}}>Home</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white"}}>Properties</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white"}}>Construction</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white"}}>About</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.LANDING} className="nav-link" style={{color: "white"}}>Contact</Link>
                </li>
                <li className={`nav-item active ${styles.nav_items_styles}`}>
                    <Link to={ROUTES.SIGN_IN} className="nav-link" style={{color: "white"}}>Sign In</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            </form>
        </div>
    </nav>
)

export default NavigationComponent