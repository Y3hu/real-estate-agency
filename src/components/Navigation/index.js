import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import * as STRINGS from '../../constants/strings'
import SignOut from '../SignOut'
//import Logo from '../../assets/logo.png'
import Logo from '../../assets/FullColor.png'

import { AuthUserContext } from '../Session'

import styles from './navigation.module.scss'

const NavigationComponent = ({ changeLanguage, language, history }) => {
    const [listingCode, setListingCode] = useState("")

    const onListingCodeChange = e => setListingCode(e.target.value)

    const onPressSearch = e => {
        e.preventDefault()
        history.push(`${ROUTES.PROPERTIES}/${listingCode}`)
        setListingCode("")
    }

    const props = { listingCode, onListingCodeChange, onPressSearch, changeLanguage, language }

    return (
        <div className={styles.nav_container}>
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <NavigationAuth {...props} /> : <NavigationNonAuth {...props} />
                }
            </AuthUserContext.Consumer>
        </div>
    )
}

const NavigationAuth = ({ listingCode, onListingCodeChange, onPressSearch }) => (
    <nav className={`navbar fixed-top navbar-expand-lg ${styles.nav_container}`}>
        <div className={`navbar-brand ${styles.logo_search_input}`}>
            <img className={styles.logo} src={Logo} title="logo" alt="logo" />
            <button className={`navbar-toggler ${styles.nav_button}`} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i className={`navbar-toggler-icon fas fa-bars ${styles.nav_button_icon}`}></i>
            </button>
            <form className={styles.form}>
                <div className="input-group">
                    <input className="form-control border-right-0" type="text" placeholder="listing code number" onChange={onListingCodeChange} value={listingCode}></input>
                    <span className="input-group-append bg-white">
                        <button className="btn border border-left-0" type="button" onClick={onPressSearch}><i className="fas fa-search"></i></button>
                    </span>
                </div>
            </form>
        </div>
        <div className={`collapse navbar-collapse ${styles.nav_list}`} id="navbarTogglerDemo02">
            <div className={`${styles.nav_list_items_container}`}>

                <i className={`${styles.nav_items_styles}`}>
                    <Link to={`${ROUTES.MANAGEPROPERTIES}`} className="nav-link" style={{ color: "white", textAlign: "center" }}>Manager <span className="sr-only">(current)</span></Link>
                </i>
                <i className={`${styles.nav_items_styles}`}>
                    <Link to={ROUTES.CAROUSEL} className="nav-link" style={{ color: "white", textAlign: "center" }}>Carousel</Link>
                </i>
                <i className={`${styles.nav_items_styles}`}>

                    <Link to={ROUTES.ACCOUNT} className="nav-link" style={{ color: "white", textAlign: "center" }}>Account</Link>
                </i>
                <i className={`${styles.nav_items_styles}`}>
                    <Link to={ROUTES.ADMIN} className="nav-link" style={{ color: "white", textAlign: "center" }}>Admin</Link>
                </i>
                <i className={`${styles.nav_items_styles}`}>
                    <SignOut />
                </i>
            </div>
        </div>
    </nav>
)

const NavigationNonAuth = ({ listingCode, onListingCodeChange, onPressSearch, changeLanguage, language }) => (
    <nav className={`navbar fixed-top navbar-expand-lg ${styles.nav_container}`}>
        <div className={`navbar-brand ${styles.logo_search_input}`}>
            <img className={styles.logo} src={Logo} title="logo" alt="logo" />
            <button className={`navbar-toggler ${styles.nav_button}`} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i className={`navbar-toggler-icon fas fa-bars ${styles.nav_button_icon}`}></i>
            </button>
            <form className={styles.form}>
                <div className="input-group">
                    <input className="form-control border-right-0" type="text" placeholder={!language ? "listing code number" : STRINGS.LISTINGCODE} onChange={onListingCodeChange} value={listingCode}></input>
                    <span className="input-group-append bg-white">
                        <button className="btn border border-left-0" type="button" onClick={onPressSearch}><i className="fas fa-search"></i></button>
                    </span>
                </div>
            </form>
        </div>
        <div className={styles.check_box} onClick={changeLanguage}>
            <input id="toggle-state" type="checkbox" data-toggle="toggle" data-on="English" data-off="Español" data-onstyle="secondary" data-offstyle="success" />
        </div>
        <div className={`collapse navbar-collapse ${styles.nav_list}`} id="navbarTogglerDemo02">

            <div className={`navbar-nav mr-auto mt-2 mt-lg-0 ${styles.nav_list_items_container}`}>

                <i className={`${styles.nav_items_styles}`}>
                    <Link to={ROUTES.HOME} className="nav-link" style={{ color: "white", textAlign: "center" }}>
                        {language ? STRINGS.HOME : 'Home'}
                    </Link>
                </i>
                <i className={`${styles.nav_items_styles}`}>
                    <Link to={`${ROUTES.PROPERTIES}/all`} className="nav-link" style={{ color: "white", textAlign: "center" }}>{language ? STRINGS.PROPERTIES : 'Properties'}</Link>
                </i>
                <i className={`${styles.nav_items_styles}`}>
                    <Link to={ROUTES.ABOUT} className="nav-link" style={{ color: "white", textAlign: "center" }}>{language ? STRINGS.ABOUT : 'About'}</Link>
                </i>
                <i className={`${styles.nav_items_styles}`}>
                    <Link to={ROUTES.CONTACT} className="nav-link" style={{ color: "white", textAlign: "center" }}>{language ? STRINGS.CONTACT : 'Contact'}</Link>
                </i>
                <i className={`${styles.nav_items_styles}`}>
                    <Link to={ROUTES.SIGN_IN} className="nav-link" style={{ color: "white", textAlign: "center" }}>{language ? STRINGS.SIGNIN : 'Sign In'}</Link>
                </i>
            </div>
        </div>
    </nav>
)

export default withRouter(NavigationComponent)