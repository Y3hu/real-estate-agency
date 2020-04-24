import React, { Component } from 'react'

const FormContext = React.createContext(null)

export const withForm = Component => props => (
    <FormContext.Consumer>
        {state => <Component {...props} state={state} />}
    </FormContext.Consumer>
)

export default FormContext