import { useState } from "react"

const useFormHook = ({ INITIAL_STATE }) => {
    const [state, setState] = useState({...INITIAL_STATE})

    const changeState = e => setState({...state, [e.target.name]: e.target.value})

    const cleanState = newState => setState({...newState})

    return {
        state,
        changeState,
        cleanState
    }
}

export default useFormHook