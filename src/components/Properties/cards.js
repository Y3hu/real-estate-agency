import React from 'react'

import styles from './properties.module.scss'

const CardsComponent = ({ image }) => {

    return (
        <div className={`card ${styles.card_shadow}`}>
            <img src={image} className="card-img-top" alt="propertie look" title="propertie look" />
            <div>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className={`btn ${styles.button_animated}`}>
                    <span>View more</span>
                </button>
            </div>
        </div>
    )
}

export default CardsComponent