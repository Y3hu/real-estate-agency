import React, { useEffect, useState } from 'react'
import useFormHook from '../../../hooks/formHook'
import axios from 'axios'
import * as STRINGS from '../../../constants/strings'

import styles from './form.module.scss'

const INITIAL_STATE = {
    name: '',
    lastName: '',
    email: '',
    message: "",
    error: null
}

const FormComponent = ({ message, showAlertMessage, language }) => {
    const { state, changeState, cleanState } = useFormHook({ INITIAL_STATE })
    const [allow, setAllow] = useState(true)

    useEffect(() => {

        if (message && message.length > 1 && allow) {
            changeState({
                target: {
                    name: "message",
                    value: !language ? `Hello, I am interested in this property ${message}. Please contact me.` : STRINGS.MESSAGECONTENT(message)
                }
            })
            setAllow(false)
        }


    }, [state, message, changeState, allow, language])

    const onSubmitForm = async (e) => {
        e.preventDefault()
        let userInfo = {
            name: state.name,
            lastName: state.lastName,
            email: state.email,
            message: state.message
        }

        axios.post('https://us-central1-real-estate-agency-3a42a.cloudfunctions.net/sendMessage', userInfo)
            .then(res => {
                cleanState({ INITIAL_STATE })
                showAlertMessage()
            })
            .catch(err => console.log(err))

    }

    const validateEmail = (email) => {
        // eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(email.toLowerCase()))
        return re.test(email.toLowerCase());
    }

    let isInvalid =
        !state.name ||
        state.name.length < 3 ||
        !state.lastName ||
        state.lastName.length < 3 ||
        !validateEmail(state.email) ||
        !state.message ||
        state.message.length < 3

    return (
        <form style={{ width: "100%" }} onSubmit={onSubmitForm}>
            <div className="form align-items-center">
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormName">Name</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className={`input-group-text ${styles.labels_to_left}`}>{!language ? 'Name' : STRINGS.NAME}</div>
                        </div>
                        <input type="text" name="name" className={`form-control ${styles.input_size}`} onChange={e => changeState(e)} value={state.name || ''} id="inlineFormName" required />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineInputLastName">Last Name</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className={`input-group-text ${styles.labels_to_left}`}>{!language ? 'Last Name' : STRINGS.LASTNAME}</div>
                        </div>
                        <input type="text" name="lastName" className={`form-control ${styles.input_size}`} onChange={e => changeState(e)} value={state.lastName || ''} id="inlineInputLastName" />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineInputEmail">Email</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className={`input-group-text ${styles.labels_to_left}`}>{!language ? 'Email' : STRINGS.EMAIL}</div>
                        </div>
                        <input type="email" name="email" className={`form-control ${styles.input_size}`} onChange={e => changeState(e)} value={state.email || ''} id="inlineInputEmail" required />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineInputMessage">Message</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className={`input-group-text ${styles.labels_to_left}`}>{!language ? 'Message' : STRINGS.MESSAGE}</div>
                        </div>
                        <textarea name="message" className={`form-control ${styles.input_size}`} onChange={e => changeState(e)} value={state.message || ''} id="inlineInputMessage" rows="4" disabled={!allow}>
                        </textarea>
                    </div>
                </div>
                <div className={`col-auto ${styles.submit_button}`}>
                    <button type="submit" className="btn btn-primary mb-2" style={{ backgroundColor: "#2699fb", border: 0 }} disabled={isInvalid}>{!language ? 'Submit' : STRINGS.SUBMIT}</button>
                </div>
                {state.error && <p>{state.error.message}</p>}
            </div>
        </form>
    )
}

export default FormComponent