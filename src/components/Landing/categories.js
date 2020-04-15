import React from 'react'
import { withRouter } from 'react-router-dom'

const CategoriesComponent = ({ name, image, history }) => {

    const categorieSelected = name => {
        console.log(name)
    }

    return (
        <button style={{ backgroundImage: `url(${image})` }} onClick={() => categorieSelected(name)}>
            <span onClick={() => categorieSelected(name)}>{name.toUpperCase()} </span>
        </button>
    )
}

export default withRouter(CategoriesComponent)