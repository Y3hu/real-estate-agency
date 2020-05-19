import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()
        this.db = app.database()
        this.storage = app.storage()
    }

    // *** Auth API ***

    //create user with email and password
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

    //sign in user with email and password
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

    //sign out user
    doSignOut = _ => this.auth.signOut()

    //send link to user email in order to reset password
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    //update the current user's password
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`)

    users = () => this.db.ref('users')

    categories = () => this.db.ref('categories')

    propertie = uid => this.db.ref(`properties/${uid}`)

    properties = () => this.db.ref('properties')

}

export default Firebase