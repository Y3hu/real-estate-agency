import React from 'react'
import ProfilePic from '../../../assets/profile_pic.jpeg'
import styles from './profile_card.module.scss'

import About_Image from '../../../assets/about/about.jpeg'

const ProfileCardComponent = () => {

    return(
            <div className={`card ${styles.profile_card_1}`}>
                <img src={About_Image} alt="profile-sample1" className={styles.background}/>
                <img src={ProfilePic} alt="profile-pic" className={styles.profile}/>
                <div className={styles.card_content}>
                    <h2>Anne Marie Martínez<small>Owner</small></h2>
                    <div className={styles.icon_block}>
                        <a href="https://www.facebook.com/annemarie.martinez.528" target="blank"><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/martinez1580" target="blank"><i className="fa fa-twitter"></i></a>
                        
                    </div>
                </div>
            </div>
    )
}

export default ProfileCardComponent