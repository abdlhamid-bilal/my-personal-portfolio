import { motion } from "motion/react";
import styles from './AboutMe.module.css'

function AboutMe() {
    return (
        <div className={styles.container}>
            <h3>Introduction</h3>
            <p>I am studying Computer Science at the RWTH Aachen University 🏫.
            </p>
            <h3>University</h3>
            <p>
                I am now in my second semester. <br/> Besides my normal coursework,
                I am a member of the <a href="https://data-science-club.de/" target="_blank"> Aachen Data Science Club </a>
            </p>
            <h3>Interests</h3>
            <p>
                Computer Vision, Data Science, Machine Learning and theoretical computer science.
            </p>
        </div>
    )
}

export default AboutMe;