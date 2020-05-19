import React from "react"
const Submit = ({ navigation, formData }) => {
    const { go } = navigation

    return (
        <div>
            <h3>Thank you for submitting. We will be in touch</h3>
      New Form -> <button onClick={() => go("general")}>New</button>
        </div>
    )
}

export default Submit