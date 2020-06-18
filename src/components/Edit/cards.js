import React from 'react'

import styles from './properties.module.scss'

const CardsComponent = ({ info = {}, onSelect }) => {
    let { price } = info
    price = new Intl.NumberFormat().format(price)

    let image = info.images.find(image => {
        if(image) return image.portrait === true

        return ''
    })

    return (
        <div className={`card ${styles.card_shadow}`}>
            <img src={(image && image.url) ? image.url : ''} className="card-img-top" alt="propertie look" title="propertie look" loading="lazy" />
            <div>
                <h5 className="card-title">
                    ${price}
                </h5>
                <p className="card-text">{info.propertyTitle}</p>
                <button className={`btn ${styles.button_animated}`} onClick={e => onSelect(info)}>
                    <span>Edit this</span>
                </button>
            </div>
        </div>
    )
}

export default CardsComponent