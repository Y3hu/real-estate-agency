import { useState, useEffect, useRef } from "react"

const useFormHook = ({ INITIAL_STATE }) => {
    const [state, setState] = useState(INITIAL_STATE || {})

    const formRendered = useRef(true);

    useEffect(() => {

        if (!formRendered.current) {
            setState(INITIAL_STATE)
        }
        formRendered.current = false;
    }, [INITIAL_STATE])

    const changeState = e => setState({ ...state, [e.target.name]: e.target.value })

    const cleanState = newState => setState({ ...newState })

    return {
        state,
        changeState,
        cleanState
    }
}

export default useFormHook