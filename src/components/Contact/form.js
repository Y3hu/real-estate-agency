import React, { useEffect, useState } from 'react'
import useFormHook from '../../hooks/formHook'
import axios from 'axios'

import styles from './contact.module.scss'

const INITIAL_STATE = {
    name: '',
    lastName: '',
    email: '',
    message: "",
    error: null
}

const FormComponent = ({ message }) => {
    const { state, changeState, cleanState } = useFormHook({ INITIAL_STATE })
    const [allow, setAllow] = useState(true)

    useEffect(() => {

        if (message && message.length > 1 && allow) {
            changeState({
                target: {
                    name: "message",
                    value: `Hello, I am interested in this property ${message}. Please contact me.`
                }
            })
            setAllow(false)
        }


    }, [message, changeState, allow])

    const onSubmitForm = async (e) => {
        e.preventDefault()
        let userInfo = {
            name: state.name,
            lastName: state.lastName,
            email: state.email,
            message: state.message
        }

        /**axios.get(`https://us-central1-gym1000-b0dd5.cloudfunctions.net/sendMail/<${user.email}>`)
            .then(res => {
                this.updateUser(user)
            })
            .catch(err => console.log(err))*/

        axios.post('https://us-central1-real-estate-agency-3a42a.cloudfunctions.net/sendMessage', userInfo)
            .then(res => {
                cleanState()
                console.log(res)
            })
            .catch(err => console.log(err))

    }

    let isInvalid =
        state.name === '' ||
        state.lastName === '' ||
        state.email === '' ||
        state.message === ''

    return (
        <form style={{ width: "100%" }} onSubmit={onSubmitForm}>
            <div className="form align-items-center">
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormName">Name</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className={`input-group-text ${styles.labels_to_left}`}>Name</div>
                        </div>
                        <input type="text" name="name" className={`form-control ${styles.input_size}`} onChange={e => changeState(e)} value={state.name || ''} id="inlineFormName" />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineInputLastName">Last Name</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className={`input-group-text ${styles.labels_to_left}`}>Last Name</div>
                        </div>
                        <input type="text" name="lastName" className={`form-control ${styles.input_size}`} onChange={e => changeState(e)} value={state.lastName || ''} id="inlineInputLastName" />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineInputEmail">Email</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className={`input-group-text ${styles.labels_to_left}`}>Email</div>
                        </div>
                        <input type="email" name="email" className={`form-control ${styles.input_size}`} onChange={e => changeState(e)} value={state.email || ''} id="inlineInputEmail" />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineInputMessage">Message</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className={`input-group-text ${styles.labels_to_left}`}>Message</div>
                        </div>
                        <textarea name="message" className={`form-control ${styles.input_size}`} onChange={e => changeState(e)} value={state.message || ''} id="inlineInputMessage" rows="4" disabled={!allow}>
                        </textarea>
                    </div>
                </div>
                <div className={`col-auto ${styles.submit_button}`}>
                    <button type="submit" className="btn btn-primary mb-2" style={{ backgroundColor: "#2699fb", border: 0 }} disabled={isInvalid}>Submit</button>
                </div>
                {state.error && <p>{state.error.message}</p>}
            </div>
        </form>
    )
}

export default FormComponent