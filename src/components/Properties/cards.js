import React from 'react'
import * as STRINGS from '../../constants/strings'
import DefaultImage from '../../assets/default.jpg'
import styles from './properties.module.scss'

const CardsComponent = ({ info = {}, onSelect, language }) => {
    let { price } = info
    price = new Intl.NumberFormat().format(price)

    let image = (info.images && info.images.length > 0) ? info.images.find(image => image.portrait === true) : ''

    return (
        <div className={`card bg-dark text-white ${styles.card_shadow}`}>
            <img src={image ? image.url : DefaultImage} className="card-img" alt="property cover" title="property cover" loading="lazy" />
            <div className="card-img-overlay">
                <h5 className={`card-title ${styles.card_text}`}>
                    ${price}
                </h5>
                <p className={`card-text ${styles.card_text}`}>{info.propertyTitle}</p>
                <button className={`btn ${styles.button_animated}`} onClick={e => onSelect(info)}>
                    <span>{!language ? 'View more' : STRINGS.VIEWMORE}</span>
                </button>
            </div>
        </div>
    )
}

export default CardsComponent

/**
 margin: 30px;
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.6;
 */