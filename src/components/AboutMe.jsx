import { motion } from "motion/react";
import styles from './AboutMe.module.css'

function AboutMe() {
    return(
        <div className={styles.container}>
            <h3>Introduction</h3>
            <p>Hey! My name is Abdlhamid Bilal and I am studying Computer Science at the RWTH Aachen University 🏫.
            </p>
            <h3>University</h3>
            <p>
                I have almost finished my first semestre. Besides my normal coursework,
                I am a member of the <a href="https://data-science-club.de/" target="_blank"> Aachen Data Science Club </a> 
            </p>
            <h3>Hobbies</h3>
            <p>
                I like doing Jiu-Jitsu (No-Gi) in my free time and enjoy doing projects like this.
                After exams, I am going to participate in some Hackathons!
                Check out my GitHub account:    
            </p>
            <button 
            onClick={()=>window.open("https://github.com/Orivex")}
            style={{ 
                      background: "none", 
                      border: "none", 
                      outline: "none",
                      padding: 0, 
                      margin: 0,
                    }}>
                <img style={{borderRadius: '50%', width: 25, height: 25}} src="/assets/github.png" alt="icon"/>
            </button>
        </div>
    )
}

export default AboutMe;