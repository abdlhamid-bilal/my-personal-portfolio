import styles from './Contact.module.css';
import { motion } from 'motion/react';


function Contact() {

    const buttonComponent = (link, imgPath) => {
        return (
            <motion.button className={styles.contactButton} onClick={()=>window.open(link)}
            whileHover={{scale: 1.1, y: -5}}
            >
                <img src={imgPath} alt="social icon" />
            </motion.button>
        )
    }

    return(
        <>
            <h2 style={{color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '2rem', marginTop: '4rem'}}>Online presence</h2>
            <div className={styles.container}>
                {buttonComponent("https://www.linkedin.com/in/abdlhamid-bilal-3869772a0/", '/assets/linkedin.png')}
                {buttonComponent("https://github.com/Orivex", '/assets/github.png')}
                {buttonComponent("https://www.youtube.com/@InformatiKater-42", '/assets/youtube.png')}
            </div>
        </>
    )
}

export default Contact