import { motion } from "motion/react";
import styles from './AboutMe.module.css'

function AboutMe() {
    return (
        <div className={styles.container}>
            <h3>Introduction</h3>
            <p>Hey there! My name is Abdlhamid Bilal and I am studying Computer Science at the RWTH Aachen University 🏫.
            </p>
            <h3>University</h3>
            <p>
                I am now in my second term. Besides my normal coursework,
                I am a member of the <a href="https://data-science-club.de/" target="_blank"> Aachen Data Science Club </a>
            </p>
            <h3>Hobbies</h3>
            <p>
                Creating projects like this, doing Jiu-Jitsu and participating at Hackathons.
            </p>
        </div>
    )
}

export default AboutMe;