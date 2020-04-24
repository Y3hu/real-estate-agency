import React from 'react'

import styles from './footer.module.scss'

const FooterComponent = _ => {

    return (
        <footer className={`py-4 bg-dark text-center text-white-50 ${styles.sticky_footer}`}>
            <div className="container">
            <hr />
            <br />
            <br />
            <br />
                <span>Developed by: <a href="mailto:ychavarria18@gmail.com?Subject=Hello%20again" target="_top">Yehudy Chavarria B</a> and Designed by: <a href="mailto:ychavarria18@gmail.com?Subject=Hello" target="_top">Estefanía Reyes C</a></span>
            </div>
        </footer>
    )
}

export default FooterComponent