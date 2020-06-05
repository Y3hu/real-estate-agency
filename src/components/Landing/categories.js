import React from 'react'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const CategoriesComponent = ({ category, history }) => {

    let { image, name, filter } = category

    const categorySelected = _ => {
        history.push(`${ROUTES.PROPERTIES}/${filter}`)
    }

    return (
        <button style={{ backgroundImage: `url(${image})` }} onClick={() => categorySelected()}>
            <span>{name.toUpperCase()} </span>
        </button>
    )
}

export default withRouter(CategoriesComponent)