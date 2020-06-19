import React from 'react'

import DefaultImage from '../../assets/default.jpg'
import styles from './properties.module.scss'

const CardsComponent = ({ info = {}, onSelect, onDelete }) => {
    let { price } = info
    price = new Intl.NumberFormat().format(price)

    let image = (info.images && info.images.length > 0) ? info.images.find(image => image.portrait === true) : ''

    return (
        <div className={`card ${styles.card_shadow}`}>
            <img src={image ? image.url : DefaultImage} className="card-img-top" alt="propertie look" title="propertie look" loading="lazy" />
            <div>
                <h5 className="card-title">
                    ${price}
                </h5>
                <p className="card-text">{info.propertyTitle}</p>
                <button className={`btn ${styles.button_animated}`} style={{ marginRight: "10%" }} onClick={e => onSelect(info)}>
                    <span>Edit this</span>
                </button>
                <button className={`btn ${styles.button_animated}`} onClick={e => onDelete(info)}>
                    <span>Delete this</span>
                </button>
            </div>
        </div>
    )
}

export default CardsComponent