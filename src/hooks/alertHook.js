import { useRef, useEffect, useState } from 'react'

const useAlertHook = _ => {
    const [added, setAdded] = useState(false)

    const alertRendered = useRef(true)

    useEffect(() => {

        if (alertRendered.current) {
            setAdded(false)
        }
        alertRendered.current = false
    }, [setAdded])

    const showAlertMessage = () => {
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
        }, 2500)
    }

    return {
        added,
        showAlertMessage
    }

}

export default useAlertHook