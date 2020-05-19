import React from 'react'

import styles from './properties.module.scss'

const CardsComponent = ({ info = {} }) => {
    console.log(info)

    return (
        <div className={`card ${styles.card_shadow}`}>
            <img src={info.images[0]} className="card-img-top" alt="propertie look" title="propertie look" />
            <div>
                <h5 className="card-title">{info.propertyTitle}</h5>
                <p className="card-text">{info.description}</p>
                <button className={`btn ${styles.button_animated}`}>
                    <span>View more</span>
                </button>
            </div>
        </div>
    )
}

export default CardsComponent