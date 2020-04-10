import React from 'react'

const CategoriesComponent = _ => {

    return(
        <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Residential</div>
                <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style={{width: "100%"}} />
            </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Commercial</div>
                <img src="https://www.w3schools.com/w3images/house2.jpg" alt="House" style={{width: "100%"}} />
            </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Developments</div>
                <img src="https://www.w3schools.com/w3images/house3.jpg" alt="House" style={{width: "100%"}} />
            </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Rentals</div>
                <img src="https://www.w3schools.com/w3images/house4.jpg" alt="House" style={{width: "100%"}} />
            </div>
            </div>
        </div>
    )
}

export default CategoriesComponent