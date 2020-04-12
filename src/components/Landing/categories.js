import React from 'react'

const CategoriesComponent = ({ name, image }) => {

    return(
        <button style={{backgroundImage: `url(${image})`}} >
            <span>{name} </span>
        </button>
    )
}

export default CategoriesComponent